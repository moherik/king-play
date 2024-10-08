import { getTransactions } from '$lib/models/transactions';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent, url }) => {
	const { user } = await parent();

	const defaultLimit = 10;
	const startDate = url.searchParams.get('start')
		? new Date(url.searchParams.get('start')?.toString()!)
		: new Date();
	const endDate = url.searchParams.get('end')
		? new Date(url.searchParams.get('end')?.toString()!)
		: new Date();
	const status = url.searchParams.get('status') ?? 'all';
	const search = url.searchParams.get('search') ?? '';
	const limit = url.searchParams.get('limit')
		? Number(url.searchParams.get('limit'))
		: defaultLimit;
	const page = url.searchParams.get('page') ? Number(url.searchParams.get('page')) : 1;

	const { count, data: transactions } = await getTransactions({
		idMember: user?.idMember.toString()!,
		startDate,
		endDate,
		limit: limit,
		offset: (page - 1) * limit,
		search,
		status: status as any
	});

	return {
		transactions,
		count,
		defaultLimit
	};
};
