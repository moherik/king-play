<script>
	import { ChevronLeft, ChevronRight, DownloadCloud, Inbox, SortAsc } from 'lucide-svelte';

	import Datepicker from '$lib/components/datepicker.svelte';
	import EmptyTable from '$lib/components/empty-table.svelte';

	export let dataComis = ['hehe'];

	let startDate = new Date();
	let endDate = new Date();
	let product = '';
	let search = '';
	let page = '25';
</script>

<section class="space-y-6">
	<header class="space-y-1">
		<h2 class="text-xl font-bold">Data Komisi</h2>
		<p class="text-sm">Menampilkan data komisi yang Anda dapat.</p>
	</header>

	<div class="space-y-6">
		<div class="grid md:grid-cols-3 gap-4 md:bg-neutral-800 md:border md:border-neutral-700 md:p-4 md:rounded-lg">
			<Datepicker label="Pilih Tanggal" bind:startDate bind:endDate isRange />
			<div class="input-group">
				<label for="status" class="input-label">Produk</label>
				<select bind:value={product} name="status" class="input">
					<option value="">Semua Produk</option>
				</select>
			</div>
			<div class="input-group">
				<label for="search" class="input-label">Pencarian</label>
				<input
					bind:value={search}
					type="text"
					class="input"
					name="search"
					placeholder="Cari data komisi"
				/>
			</div>
		</div>

		<div class="space-y-4">
			<div class="flex items-center space-x-4">
				<select bind:value={page} name="status" class="input">
					<option value="10">10 Entries</option>
					<option value="25">25 Entries</option>
					<option value="50">50 Entries</option>
					<option value="100">100 Entries</option>
				</select>
				<button class="btn">
					<DownloadCloud size={18} class="md:mr-2" />
					<span class="hidden md:block">Ekspor ke XLSX</span>
				</button>
			</div>

			<div class="overflow-x-auto border border-neutral-700 rounded-lg">
				<table class="min-w-full">
					<thead>
						<th>ID Transaksi</th>
						<th class="hidden lg:table-cell">Produk</th>
						<th class="hidden md:table-cell">Tanggal</th>
						<th>Komisi</th>
					</thead>
					<tbody>
						{#if dataComis.length > 0}
							<tr>
								<td>
									203029302
									<dl class="lg:hidden mt-2">
										<dt class="mb-1">Mobile Legends 20 Diamond</dt>
										<dt class="md:hidden text-xs text-neutral-400">Tgl: 10/06/2024</dt>
									</dl>
								</td>
								<td class="hidden lg:table-cell">Mobile Legends 20 Diamond</td>
								<td class="hidden md:table-cell">10/06/2024</td>
								<td>Rp20.000</td>
							</tr>
						{:else}
							<tr>
								<td colspan="6"><EmptyTable description="Belum ada data komisi" /></td>
							</tr>
						{/if}
					</tbody>
				</table>

				{#if dataComis.length > 0}
					<div class="flex items-center justify-between px-6 py-2 border-t border-t-neutral-700">
						<span class="text-xs text-neutral-400">Menampilkan halaman 1 dari 1</span>
						<div class="flex items-center space-x-2">
							<button class="p-2 rounded-full hover:bg-neutral-700 transition-all"
								><ChevronLeft size={18} /></button
							>
							<button class="p-2 rounded-full hover:bg-neutral-700 transition-all"
								><ChevronRight size={18} /></button
							>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
