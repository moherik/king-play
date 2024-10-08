const load = async ({ url, locals }) => {
  const host = url.hostname;
  const masterHost = host == "localhost" || host == "kingplay.id" || host == "www.kingplay.id";
  return {
    masterHost
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BWquMCM-.js')).default;
const server_id = "src/routes/+layout.server.ts";
const imports = ["_app/immutable/nodes/0.Dv7hsvn7.js","_app/immutable/chunks/scheduler.DDK_FMqP.js","_app/immutable/chunks/index.CLy-O5qq.js","_app/immutable/chunks/each.CMQ7KCsU.js","_app/immutable/chunks/index.CwlbleiT.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.DRJR06kr.js","_app/immutable/chunks/index.zbdKov3I.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/stores.CW4ATsLg.js","_app/immutable/chunks/entry.eGK5Mmx5.js"];
const stylesheets = ["_app/immutable/assets/0.DR6T1R9X.css","_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=0-BFBYkKHs.js.map