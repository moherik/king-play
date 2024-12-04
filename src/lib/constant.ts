export const TransactionStatus = [
	{
		key: 'waiting',
		value: 'Menunggu',
		class: 'p-1 block rounded-full	bg-neutral-500 text-neutral-50 text-center'
	},
	{
		key: 'pending',
		value: 'Sedang diproses',
		class: 'p-1 block rounded-full	bg-yellow-500 text-neutral-800 text-center'
	},
	{
		key: 'success',
		value: 'Sukses',
		class: 'p-1 block rounded-full	bg-green-500 text-neutral-50 text-center'
	}
];

export const MappingGroupChannel = [
	{
		group: 'VA',
		name: 'Virtual Account'
	},
	{
		group: 'EWALLET',
		name: 'E-Wallet'
	},
	{
		group: 'BANK',
		name: 'Bank'
	},
	{
		group: 'QRIS',
		name: 'QRIS'
	},
	{
		group: 'RETAIL',
		name: 'Toko Retail'
	}
];
