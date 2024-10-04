import { c as create_ssr_component, s as subscribe, a as escape, v as validate_component, b as add_attribute } from './ssr-D8vzeGmv.js';
import { p as page } from './stores-Cwz-jE6o.js';
import { T as Transaction_list } from './transaction-list-CPQXS-rK.js';
import { I as Icon } from './Icon-6B7qrYG7.js';
import { C as Clock } from './clock-C_DfCGFm.js';
import './client-BUusD8wq.js';
import './exports-BGi7-Rnc.js';
import './formatter-xDj28_d0.js';
import './constant-CVq9EQOr.js';
import './empty-table-BxjAhhi3.js';
import './chevron-right-CDoCK1lu.js';

const Arrow_left_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M8 3 4 7l4 4" }],
    ["path", { "d": "M4 7h16" }],
    ["path", { "d": "m16 21 4-4-4-4" }],
    ["path", { "d": "M20 17H4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "arrow-left-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Badge_check = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "badge-check" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Hand_coins = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"
      }
    ],
    [
      "path",
      {
        "d": "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
      }
    ],
    ["path", { "d": "m2 16 6 6" }],
    ["circle", { "cx": "16", "cy": "9", "r": "2.9" }],
    ["circle", { "cx": "6", "cy": "5", "r": "3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "hand-coins" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Refresh_ccw = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
      }
    ],
    ["path", { "d": "M3 3v5h5" }],
    [
      "path",
      {
        "d": "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
      }
    ],
    ["path", { "d": "M16 16h5v5" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "refresh-ccw" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css = {
  code: ".card.svelte-1nk0mab{cursor:pointer;border-radius:0.5rem;border-width:1px;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.card.card-default.svelte-1nk0mab{--tw-border-opacity:1;border-color:rgb(64 64 64 / var(--tw-border-opacity));background-color:rgb(82 82 82 / var(--tw-bg-opacity));--tw-bg-opacity:0.8;--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.card.card-default.svelte-1nk0mab:hover{--tw-bg-opacity:0.9\n}.card.card-yellow.svelte-1nk0mab{--tw-border-opacity:1;border-color:rgb(133 77 14 / var(--tw-border-opacity));background-color:rgb(202 138 4 / var(--tw-bg-opacity));--tw-bg-opacity:0.8;--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.card.card-yellow.svelte-1nk0mab:hover{--tw-bg-opacity:0.9\n}.card.card-blue.svelte-1nk0mab{--tw-border-opacity:1;border-color:rgb(30 64 175 / var(--tw-border-opacity));background-color:rgb(37 99 235 / var(--tw-bg-opacity));--tw-bg-opacity:0.8;--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.card.card-blue.svelte-1nk0mab:hover{--tw-bg-opacity:0.9\n}.card.card-green.svelte-1nk0mab{--tw-border-opacity:1;border-color:rgb(22 101 52 / var(--tw-border-opacity));background-color:rgb(22 163 74 / var(--tw-bg-opacity));--tw-bg-opacity:0.8;--tw-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);backdrop-filter:var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms\n}.card.card-green.svelte-1nk0mab:hover{--tw-bg-opacity:0.9\n}",
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { tick } from \\"svelte\\";\\nimport {\\n  ArrowUp,\\n  BadgeCheckIcon,\\n  ArrowLeftRight,\\n  Clock,\\n  RefreshCcw,\\n  HandCoins\\n} from \\"lucide-svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport TransactionList from \\"./transaction-list.svelte\\";\\nexport let data;\\nlet form;\\nlet pageNum = $page.url.searchParams.get(\\"page\\")?.toString() ? Number($page.url.searchParams.get(\\"page\\")?.toString()) : 1;\\n<\/script>\\n\\n<section class=\\"space-y-6\\">\\n\\t<h2 class=\\"text-xl font-bold mb-4\\">Transaksi Hari Ini</h2>\\n\\t<div class=\\"grid grid-cols-2 gap-6\\">\\n\\t\\t<div class=\\"card card-default\\">\\n\\t\\t\\t<div class=\\"p-6 space-y-2\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center justify-between\\">\\n\\t\\t\\t\\t\\t<p class=\\"text-3xl font-bold\\">{data.total}</p>\\n\\t\\t\\t\\t\\t<ArrowLeftRight class=\\"text-green-500\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-sm text-neutral-300\\">Total Transaksi</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card card-default\\">\\n\\t\\t\\t<div class=\\"p-6 space-y-2\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center justify-between\\">\\n\\t\\t\\t\\t\\t<p class=\\"text-3xl font-bold\\">{data.resume.totalnum}</p>\\n\\t\\t\\t\\t\\t<HandCoins class=\\"text-green-500\\" />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-sm text-neutral-300\\">Total Penjualan</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6\\">\\n\\t\\t<div class=\\"card card-yellow\\">\\n\\t\\t\\t<div class=\\"p-6 space-y-2\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center justify-between\\">\\n\\t\\t\\t\\t\\t<p class=\\"text-3xl font-bold\\">{data.resume.waiting}</p>\\n\\t\\t\\t\\t\\t<Clock />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-sm text-neutral-300\\">Menunggu Pembayaran</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card card-blue\\">\\n\\t\\t\\t<div class=\\"p-6 space-y-2\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center justify-between\\">\\n\\t\\t\\t\\t\\t<p class=\\"text-3xl font-bold\\">{data.resume.pending}</p>\\n\\t\\t\\t\\t\\t<RefreshCcw />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-sm text-neutral-300\\">Dalam Proses</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t\\t<div class=\\"card card-green\\">\\n\\t\\t\\t<div class=\\"p-6 space-y-2\\">\\n\\t\\t\\t\\t<div class=\\"flex items-center justify-between\\">\\n\\t\\t\\t\\t\\t<p class=\\"text-3xl font-bold\\">{data.resume.success}</p>\\n\\t\\t\\t\\t\\t<BadgeCheckIcon />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"text-sm text-neutral-300\\">Sukses</p>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n\\n\\t<h2 class=\\"text-xl font-bold mb-4\\">Transaksi Terbaru</h2>\\n\\t<form bind:this={form} data-sveltekit-noscroll>\\n\\t\\t<input type=\\"hidden\\" name=\\"page\\" bind:value={pageNum} />\\n\\t</form>\\n\\n\\t<TransactionList\\n\\t\\tdata={data.transactions}\\n\\t\\tlimit={data.limit}\\n\\t\\ttotal={data.total}\\n\\t\\t{pageNum}\\n\\t\\ton:prev={async () => {\\n\\t\\t\\tif (pageNum > 1) {\\n\\t\\t\\t\\tpageNum -= 1;\\n\\n\\t\\t\\t\\tawait tick();\\n\\t\\t\\t\\tform.requestSubmit();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t\\ton:next={async () => {\\n\\t\\t\\tif (pageNum < 10) {\\n\\t\\t\\t\\tpageNum += 1;\\n\\n\\t\\t\\t\\tawait tick();\\n\\t\\t\\t\\tform.requestSubmit();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t/>\\n</section>\\n\\n<style>\\n\\t.card {\\n    cursor: pointer;\\n    border-radius: 0.5rem;\\n    border-width: 1px;\\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\\n}\\n\\t.card.card-default {\\n    --tw-border-opacity: 1;\\n    border-color: rgb(64 64 64 / var(--tw-border-opacity));\\n    background-color: rgb(82 82 82 / var(--tw-bg-opacity));\\n    --tw-bg-opacity: 0.8;\\n    --tw-backdrop-blur: blur(4px);\\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n    transition-property: all;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n    transition-duration: 150ms\\n}\\n\\t.card.card-default:hover {\\n    --tw-bg-opacity: 0.9\\n}\\n\\t.card.card-yellow {\\n    --tw-border-opacity: 1;\\n    border-color: rgb(133 77 14 / var(--tw-border-opacity));\\n    background-color: rgb(202 138 4 / var(--tw-bg-opacity));\\n    --tw-bg-opacity: 0.8;\\n    --tw-backdrop-blur: blur(4px);\\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n    transition-property: all;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n    transition-duration: 150ms\\n}\\n\\t.card.card-yellow:hover {\\n    --tw-bg-opacity: 0.9\\n}\\n\\t.card.card-blue {\\n    --tw-border-opacity: 1;\\n    border-color: rgb(30 64 175 / var(--tw-border-opacity));\\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\\n    --tw-bg-opacity: 0.8;\\n    --tw-backdrop-blur: blur(4px);\\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n    transition-property: all;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n    transition-duration: 150ms\\n}\\n\\t.card.card-blue:hover {\\n    --tw-bg-opacity: 0.9\\n}\\n\\t.card.card-green {\\n    --tw-border-opacity: 1;\\n    border-color: rgb(22 101 52 / var(--tw-border-opacity));\\n    background-color: rgb(22 163 74 / var(--tw-bg-opacity));\\n    --tw-bg-opacity: 0.8;\\n    --tw-backdrop-blur: blur(4px);\\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n    transition-property: all;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n    transition-duration: 150ms\\n}\\n\\t.card.card-green:hover {\\n    --tw-bg-opacity: 0.9\\n}\\n\\t.card.card-red {\\n    --tw-border-opacity: 1;\\n    border-color: rgb(153 27 27 / var(--tw-border-opacity));\\n    background-color: rgb(220 38 38 / var(--tw-bg-opacity));\\n    --tw-bg-opacity: 0.8;\\n    --tw-backdrop-blur: blur(4px);\\n    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\\n    transition-property: all;\\n    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\\n    transition-duration: 150ms\\n}\\n\\t.card.card-red:hover {\\n    --tw-bg-opacity: 0.9\\n}\\n</style>\\n"],"names":[],"mappings":"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"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let form;
  let pageNum = $page.url.searchParams.get("page")?.toString() ? Number($page.url.searchParams.get("page")?.toString()) : 1;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<section class="space-y-6"><h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-1swowh8">Transaksi Hari Ini</h2> <div class="grid grid-cols-2 gap-6"><div class="card card-default svelte-1nk0mab"><div class="p-6 space-y-2"><div class="flex items-center justify-between"><p class="text-3xl font-bold">${escape(data.total)}</p> ${validate_component(Arrow_left_right, "ArrowLeftRight").$$render($$result, { class: "text-green-500" }, {}, {})}</div> <p class="text-sm text-neutral-300" data-svelte-h="svelte-909t5q">Total Transaksi</p></div></div> <div class="card card-default svelte-1nk0mab"><div class="p-6 space-y-2"><div class="flex items-center justify-between"><p class="text-3xl font-bold">${escape(data.resume.totalnum)}</p> ${validate_component(Hand_coins, "HandCoins").$$render($$result, { class: "text-green-500" }, {}, {})}</div> <p class="text-sm text-neutral-300" data-svelte-h="svelte-1pja42c">Total Penjualan</p></div></div></div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"><div class="card card-yellow svelte-1nk0mab"><div class="p-6 space-y-2"><div class="flex items-center justify-between"><p class="text-3xl font-bold">${escape(data.resume.waiting)}</p> ${validate_component(Clock, "Clock").$$render($$result, {}, {}, {})}</div> <p class="text-sm text-neutral-300" data-svelte-h="svelte-1ffdd90">Menunggu Pembayaran</p></div></div> <div class="card card-blue svelte-1nk0mab"><div class="p-6 space-y-2"><div class="flex items-center justify-between"><p class="text-3xl font-bold">${escape(data.resume.pending)}</p> ${validate_component(Refresh_ccw, "RefreshCcw").$$render($$result, {}, {}, {})}</div> <p class="text-sm text-neutral-300" data-svelte-h="svelte-tdy6e3">Dalam Proses</p></div></div> <div class="card card-green svelte-1nk0mab"><div class="p-6 space-y-2"><div class="flex items-center justify-between"><p class="text-3xl font-bold">${escape(data.resume.success)}</p> ${validate_component(Badge_check, "BadgeCheckIcon").$$render($$result, {}, {}, {})}</div> <p class="text-sm text-neutral-300" data-svelte-h="svelte-1qoy32s">Sukses</p></div></div></div> <h2 class="text-xl font-bold mb-4" data-svelte-h="svelte-17xc7k7">Transaksi Terbaru</h2> <form data-sveltekit-noscroll${add_attribute("this", form, 0)}><input type="hidden" name="page"${add_attribute("value", pageNum, 0)}></form> ${validate_component(Transaction_list, "TransactionList").$$render(
    $$result,
    {
      data: data.transactions,
      limit: data.limit,
      total: data.total,
      pageNum
    },
    {},
    {}
  )} </section>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DPradU-z.js.map
