import { db } from '$lib/db';
import { format } from 'date-fns';

import type {
	GetReportTransactionMemberType,
	GetTransactionMemberType,
	ReportTransaction,
	Transcation
} from '$lib/type';

export async function getTransactions(params: GetTransactionMemberType) {
	const startDate = format(params.startDate ?? new Date(), 'yyyy-MM-dd');
	const endDate = format(params.endDate ?? new Date(), 'yyyy-MM-dd');

	const values = [params.idMember, startDate, endDate];

	let limit = '';
	if (params.limit) {
		limit = ` limit $${values.length + 1}`;
		values.push(params.limit.toString());
	}

	let offset = '';
	if (params.offset) {
		offset = ` offset $${values.length + 1}`;
		values.push(params.offset.toString());
	}

	let where = '';
	if (params.search && params.search != '') {
		where += ` and (cast(id_transaksi as varchar) ilike $${values.length + 1} or nama_group_produk ilike $${values.length + 1} or produk ilike $${values.length + 1}) `;
		values.push(`%${params.search}%`);
	}

	if (params.status == 'waiting') {
		where += ' and (coalesce(i.status::int, 0) = 0 or coalesce(i.flag::int, 0) = 0) ';
	} else if (params.status == 'pending') {
		where +=
			" and (coalesce(i.status::int, 0) = 2 and coalesce(i.flag::int, 0) = 1 and t.response_code <> '00')";
	} else if (params.status == 'success') {
		where +=
			" and (coalesce(i.status::int, 0) = 2 and coalesce(i.flag::int, 0) = 1 and t.response_code = '00')";
	}

	const query = `select count(*) OVER() AS full_count, t.id_transaksi, t.id_member, i.id_invoice, i.fee_member, t.nominal, t.response_code, t.transaction_date, 
		mgp.nama_group_produk, mp.produk, i.status, i.flag 
    from transaksi t
		left join invoice i on i.id_invoice = t.id_invoice 
    left join mt_produk mp on mp.id_produk = t.id_produk 
    left join mt_group_produk mgp on mgp.id_group_produk = mp.id_group_produk
    where t.id_member = $1 and transaction_date between $2 and $3 ${where} and jenis_transaksi = 1
    order by transaction_date desc, transaction_time desc ${limit} ${offset}`;
	const result = await db.query(query, values);

	const data = result?.rows && result?.rows.length > 0 ? result?.rows : [];

	const transactions: Transcation[] = data.map((trx: any) => {
		const statusTrx = trx.response_code;
		const statusInvoice = trx.status;
		const flagInvoice = trx.flag;

		let status = 'waiting';
		if (statusInvoice == 2 && flagInvoice == 1) {
			if (statusTrx == '00') {
				status = 'success';
			} else {
				status = 'pending';
			}
		}

		return {
			idTransaksi: trx.id_transaksi,
			idMember: trx.id_member,
			idInvoice: trx.id_invoice,
			groupProduk: trx.nama_group_produk,
			produk: trx.produk,
			nominal: trx.nominal,
			feeMember: trx.fee_member,
			tanggal: format(trx.transaction_date, 'yyyy-MM-dd'),
			status
		};
	});

	return {
		data: transactions,
		count: data[0]?.full_count ?? 0
	};
}

export async function getResumeTrx(idMember: string) {
	const now = format(new Date(), 'yyyy-MM-dd');

	let statusses = ['waiting', 'pending', 'success', 'totalnum'];
	let data: any = {};
	for (let id = 0; id < statusses.length; id++) {
		const status = statusses[id];

		let where = '';
		if (status == 'waiting') {
			where = ' and (coalesce(i.status::int, 0) = 0 or coalesce(i.flag::int, 0) = 0) ';
		} else if (status == 'pending') {
			where =
				" and (coalesce(i.status::int, 0) = 2 and coalesce(i.flag::int, 0) = 1 and t.response_code <> '00')";
		} else if (status == 'success') {
			where =
				" and (coalesce(i.status::int, 0) = 2 and coalesce(i.flag::int, 0) = 1 and t.response_code = '00')";
		}

		const query = `select count(*) as total, sum(nominal) as total_nominal from transaksi t
		left join invoice i on i.id_invoice = t.id_invoice 
    where t.id_member = $1 and transaction_date = $2 ${where} and jenis_transaksi = 1`;

		const result = await db.query(query, [idMember, now]);
		Object.assign(data, { total: result?.rows[0]?.total ?? 0 });

		if (status == 'totalnum') {
			Object.assign(data, { totalnum: result?.rows[0]?.total_nominal ?? 0 });
		} else {
			Object.assign(data, {
				[status]: result?.rows[0]?.total ?? 0
			});
		}
	}

	return { ...data };
}

export async function getReportTransactions(params: GetReportTransactionMemberType) {
	const startDate = format(params.startDate ?? new Date(), 'yyyy-MM-dd');
	const endDate = format(params.endDate ?? new Date(), 'yyyy-MM-dd');

	const values = [params.idMember, startDate, endDate, params.limit, params.offset];
	let where = '';
	if (params.product && params.product != 'all') {
		where += ' and mgp.id_group_produk = $6 ';
		values.push(params.product);
	}

	const query = `select t.transaction_date, t.id_member, count(t.transaction_date) as total_trx, sum(t.nominal) as total_nominal, 
		sum(i.fee_member) as total_fee_member 
		from transaksi t
			left join invoice i on i.id_invoice = t.id_invoice 
			left join mt_produk mp on mp.id_produk = t.id_produk 
			left join mt_group_produk mgp on mgp.id_group_produk = mp.id_group_produk
    where t.id_member = $1 and jenis_transaksi = 1 and transaction_date between $2 and $3 
		and (coalesce(i.status::int, 0) = 2 and coalesce(i.flag::int, 0) = 1 and t.response_code = '00') ${where} 
		group by t.transaction_date, t.id_member 
    order by transaction_date desc limit $4 offset $5`;
	const result = await db.query(query, values);
	const data = result?.rows && result?.rows.length > 0 ? result?.rows : [];

	const reportTrxs: ReportTransaction[] = data.map(
		(trx: any) =>
			({
				date: trx.transaction_date,
				totalTrx: trx.total_trx,
				totalNum: trx.total_nominal,
				totalFee: trx.total_fee_member
			}) as ReportTransaction
	);

	return {
		data: reportTrxs
	};
}
