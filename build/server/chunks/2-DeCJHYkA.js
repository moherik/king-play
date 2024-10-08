import { e as error } from './index-DzcLzHBX.js';
import { g as getClientIp, B as BASE_API_URL } from './request-qZghsHO2.js';
import { addDays } from 'date-fns';
import { c as createSession } from './user-hL3JAx61.js';
import { g as getStoreByDomain } from './store-BcfelaBj.js';
import { t as themes } from './themes-CoZBCasr.js';
import 'fs';
import 'crypto';
import 'nanoid';
import './db-Dt_6_ZQU.js';
import './shared-server-DWgAsK3Q.js';
import 'pg';
import 'bcrypt';

const ID_MASTER = "1000001";
const UUID_KEY = "uuid";
const load = async ({ fetch, url, cookies, request }) => {
  const host = url.hostname;
  let idMember = ID_MASTER;
  let store;
  const storeData = await getStoreByDomain(host);
  if (storeData && storeData.id_member) {
    idMember = storeData.id_member;
    store = {
      idMember,
      name: storeData.name,
      description: storeData.description,
      phone: storeData.phone,
      email: storeData.email,
      domain: storeData.custom_domain ?? storeData.domain,
      logo: storeData.logo,
      theme: storeData.theme,
      color: storeData.color,
      promo: [],
      info: {
        fb: storeData.fb,
        tiktok: storeData.tiktok,
        ig: storeData.ig,
        telegram: storeData.telegram,
        twitter: storeData.twitter
      }
    };
  } else {
    error(404, "Store Not Found");
  }
  let userId = cookies.get(UUID_KEY);
  if (!userId) {
    const ip = await getClientIp();
    const expires = addDays(/* @__PURE__ */ new Date(), 1);
    userId = crypto.randomUUID();
    const { data: data2, error: error2 } = await createSession({
      userId: store.idMember,
      sessionToken: userId,
      expires,
      type: "user",
      host,
      ip,
      deviceInfo: request.headers.get("user-agent") ?? ""
    });
    if (error2 == null) {
      cookies.set(UUID_KEY, userId, {
        path: "/",
        domain: url.hostname == "localhost" ? "" : host,
        secure: true,
        expires,
        httpOnly: true
      });
    }
  }
  let dataTheme = store.theme;
  const color = store.color ?? "blue";
  const theme = themes[dataTheme ?? "light"];
  let games = [];
  const response = await fetch(new URL("/v1.0/api/produk/list-group-produk", BASE_API_URL).href);
  if (!response.ok) {
    throw error(500, `HTTP Error status: ${response.status}`);
  }
  const data = await response.json();
  if (data.response_code != "00") {
    throw error(500, `Error get games: ${data.response_message}`);
  }
  const item = data.response_data;
  if (item.length > 0) {
    games = item.map(
      (game) => ({
        id: game.id_group_produk,
        name: game.nama_group_produk,
        image: game.img,
        slug: game.slug
      })
    );
  } else {
    games = [];
  }
  const popularGames = games.slice(0, 3);
  return {
    color,
    theme,
    store,
    games,
    popularGames,
    isMaster: idMember == ID_MASTER
  };
};

var _layout_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
let component_cache;
const component = async () => component_cache ??= (await import('./_layout.svelte-BKw_QddC.js')).default;
const server_id = "src/routes/(homepage)/+layout.server.ts";
const imports = ["_app/immutable/nodes/2.CK8lem6y.js","_app/immutable/chunks/scheduler.DDK_FMqP.js","_app/immutable/chunks/index.CLy-O5qq.js","_app/immutable/chunks/each.CMQ7KCsU.js","_app/immutable/chunks/index.CwlbleiT.js","_app/immutable/chunks/swiper-element-bundle.DIkDjTNm.js","_app/immutable/chunks/general.LFs18mWw.js","_app/immutable/chunks/index.zbdKov3I.js","_app/immutable/chunks/x.BDa-gqVZ.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Icon.BGFqZV4V.js","_app/immutable/chunks/crown.CytOudWl.js"];
const stylesheets = ["_app/immutable/assets/2.B5i__Hu-.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=2-DeCJHYkA.js.map