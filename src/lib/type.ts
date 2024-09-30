export type Game = {
	id: number;
	slug: string;
	name: string;
	image: string;
	fields?: GameField[];
	itemImg?: string;
	itemName?: string;
};

export type GameField = {
	key: string;
	title: string;
	placeholder: string;
	type: string;
	options: string;
	target: string;
	required: boolean;
};

export type GameResponse = {
	id_group_produk: number;
	nama_group_produk: string;
	slug: string;
	img: string;
	status: number;
	tipe_group: string;
	form_fields: [];
};

export type StorePromo = {
	imageUrl: string;
	desc?: string;
	url?: string;
};

export type Store = {
	idMember: string;
	name: string;
	description: string;
	email: string;
	phone: string;
	domain: string;
	logo?: string;
	theme?: string;
	color?: string;
	promo?: StorePromo[];
	info?: {
		fb?: string;
		tiktok?: string;
		ig?: string;
		twitter?: string;
		telegram?: string;
	};
};

export type Product = {
	id: string;
	name: string;
	price: number;
	icon?: string;
	status?: number;
};

export type PaymentChannel = {
	id: number;
	name: string;
	code: string;
	image: string;
	price?: number;
	helper?: string;
};

export type PaymentChannelGroup = {
	id: number;
	label: string;
	type: string;
	channels: PaymentChannel[];
	images: string[];
};

export type Promo = {
	slug: string;
	image: string;
	desc?: string;
	url: string;
	alt?: string;
};

export type Transcation = {
	idTransaksi: string;
	idMember: string;
	idInvoice: string;
	nominal: number;
	groupProduk: string;
	produk: string;
	tanggal: string;
	status?: string;
};

export type GetTransactionMemberType = {
	idMember: string;
	startDate: Date;
	endDate: Date;
	status?: 'all' | 'waiting' | 'pending' | 'success';
	limit?: number;
	offset?: number;
	search?: string;
};

export type InvoiceDataTyoe = {
	channel: string;
	idChannel: string;
	idInquiry: number;
	idInvoice: string;
	timeLimit: Date;
	total: number;
	checkoutUrl: string;
	payUrl: string;
	panduan: string;
	reffIdBiller: string;
};
