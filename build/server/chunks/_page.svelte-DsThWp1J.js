import { c as create_ssr_component, b as add_attribute, a as escape, v as validate_component } from './ssr-D8vzeGmv.js';
import './client-BUusD8wq.js';
import './SvelteToast.svelte_svelte_type_style_lang-B0BWDvec.js';
import { S as Save } from './save-Ci3xDrjI.js';
import './exports-BGi7-Rnc.js';
import './index2-C-p3-SGJ.js';
import './Icon-6B7qrYG7.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  let name = form?.store?.values.name ?? data.store.name;
  let description = form?.store?.values.desc ?? data.store.description;
  let email = form?.store?.values.email ?? data.store.email;
  let phone = form?.store?.values.phone ?? data.store.phone;
  let theme = form?.store?.values.theme ?? data.store.theme;
  let color = form?.store?.values.color ?? data.store.color;
  let tiktok = form?.social?.values.tiktok ?? data.store.info?.tiktok;
  let fb = form?.social?.values.fb ?? data.store.info?.fb;
  let ig = form?.social?.values.ig ?? data.store.info?.ig;
  let twitter = form?.social?.values.twitter ?? data.store.info?.twitter;
  let telegram = form?.social?.values.telegram ?? data.store.info?.telegram;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="space-y-6"><header class="space-y-1" id="store" data-svelte-h="svelte-169s7a"><h2 class="text-xl font-bold">Pengaturan Toko</h2> <p class="text-sm">Informasi ini bersifat rahasia, jadi berhati-hatilah dengan apa yang Anda bagikan..</p></header> <form method="POST" action="?/store" class="space-y-4" enctype="multipart/form-data"><h4 class="font-semibold text-red-500" data-svelte-h="svelte-1scc89">Sesuaikan Website Toko</h4> <div class="grid md:grid-cols-2 gap-4"><div class="input-group"><label for="store-name" class="input-label" data-svelte-h="svelte-1ledonn">Nama Toko</label> <input type="text" name="store-name"${add_attribute("value", name, 0)} class="${"input " + escape(form?.store?.errors.name ? "input-error" : "", true)}" placeholder="Nama toko"> ${form?.store?.errors.name ? `<p class="text-xs text-red-500">${escape(form.store?.errors.name)}</p>` : ``}</div> <div class="input-group"><label for="store-desc" class="input-label" data-svelte-h="svelte-k9qtfg">Deskripsi Toko</label> <input type="text" name="store-desc"${add_attribute("value", description, 0)} class="input" placeholder="Deskripsi toko"></div> <div class="input-group"><label for="store-email" class="input-label" data-svelte-h="svelte-1tlp51a">Email</label> <input type="text" name="store-email"${add_attribute("value", email, 0)} class="${"input " + escape(form?.store?.errors.storeEmail ? "input-error" : "", true)}" placeholder="Email toko"> ${form?.store?.errors.email ? `<p class="text-xs text-red-500">${escape(form.store?.errors.email)}</p>` : ``}</div> <div class="input-group"><label for="store-phone" class="input-label" data-svelte-h="svelte-4tmwub">Nomor WhatsApp</label> <input type="text" name="store-phone"${add_attribute("value", phone, 0)} class="${"input " + escape(form?.store?.errors.storePhone ? "input-error" : "", true)}" placeholder="Nomor whatsapp toko"> ${form?.store?.errors.phone ? `<p class="text-xs text-red-500">${escape(form.store?.errors.phone)}</p>` : ``}</div> <div class="input-group" data-svelte-h="svelte-98yn11"><label for="theme" class="input-label">Logo</label> <input type="file" class="input" name="store-logo"></div> <div class="input-group"><label for="theme" class="input-label" data-svelte-h="svelte-1audy3u">Tema</label> <select name="store-theme" class="input"${add_attribute("value", theme, 0)}><option value="light" data-svelte-h="svelte-17vrt29">Terang (Default)</option><option value="dark" data-svelte-h="svelte-lqplyh">Gelap</option></select></div> <div class="input-group"><label for="theme" class="input-label" data-svelte-h="svelte-30rpmq">Warna</label> <select name="store-color" class="input"${add_attribute("value", color, 0)}><option value="blue" data-svelte-h="svelte-mytaoy">Biru</option><option value="yellow" data-svelte-h="svelte-ui4k0k">Kuning</option><option value="red" data-svelte-h="svelte-1bwec3q">Merah</option></select></div></div> <button type="submit" class="btn btn-primary w-full md:w-auto" ${""}>${validate_component(Save, "Save").$$render($$result, { class: "mr-2", size: 18 }, {}, {})}Simpan Perubahan</button></form> <form method="POST" action="?/social" class="space-y-4"><h4 class="font-semibold text-red-500" data-svelte-h="svelte-y41fw">Sosial Media</h4> <div class="grid md:grid-cols-2 gap-4"><div class="input-group"><label for="store-tiktok" class="input-label" data-svelte-h="svelte-8yu8zu">Tiktok</label> <input type="text" name="store-tiktok"${add_attribute("value", tiktok, 0)} class="input" placeholder="tiktok.com/kinggaming"></div> <div class="input-group"><label for="store-fb" class="input-label" data-svelte-h="svelte-sxcx3u">Facebook</label> <input type="text" name="store-fb"${add_attribute("value", fb, 0)} class="input" placeholder="ig.com/kinggaming"></div> <div class="input-group"><label for="store-ig" class="input-label" data-svelte-h="svelte-186f6vu">Instagram</label> <input type="text" name="store-ig"${add_attribute("value", ig, 0)} class="input" placeholder="instagram.com/kinggaming"></div> <div class="input-group"><label for="store-twitter" class="input-label" data-svelte-h="svelte-i0vde7">X/Twitter</label> <input type="text" name="store-twitter"${add_attribute("value", twitter, 0)} class="input" placeholder="x.com/kinggaming"></div> <div class="input-group"><label for="store-tgram" class="input-label" data-svelte-h="svelte-1vmdld6">Telegram</label> <input type="text" name="store-tgram"${add_attribute("value", telegram, 0)} class="input" placeholder="t.me/6280.."></div></div> <button type="submit" class="btn btn-primary w-full md:w-auto" ${""}>${validate_component(Save, "Save").$$render($$result, { class: "mr-2", size: 18 }, {}, {})}Simpan Perubahan</button></form></section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DsThWp1J.js.map