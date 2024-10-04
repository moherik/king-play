import { g as getTransactions } from './transactions-CPciDDPa.js';
import './db-Dt_6_ZQU.js';
import './shared-server-DWgAsK3Q.js';
import 'pg';
import 'date-fns';

const load = async ({ locals, url }) => {
  const session = await locals.auth();
  const defaultLimit = 10;
  const startDate = url.searchParams.get("start") ? new Date(url.searchParams.get("start")?.toString()) : /* @__PURE__ */ new Date();
  const endDate = url.searchParams.get("end") ? new Date(url.searchParams.get("end")?.toString()) : /* @__PURE__ */ new Date();
  const status = url.searchParams.get("status") ?? "all";
  const search = url.searchParams.get("search") ?? "";
  const limit = url.searchParams.get("limit") ? Number(url.searchParams.get("limit")) : defaultLimit;
  const page = url.searchParams.get("page") ? Number(url.searchParams.get("page")) : 1;
  const { count, data: transactions } = await getTransactions({
    idMember: session?.user?.id?.toString(),
    startDate,
    endDate,
    limit,
    offset: page * limit,
    search,
    status
  });
  return {
    transactions,
    count,
    defaultLimit
  };
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 14;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-CbfoR2Hp.js')).default;
const server_id = "src/routes/(member)/(dashboard)/dashboard/history/+page.server.ts";
const imports = ["_app/immutable/nodes/14.BeYUYYjC.js","_app/immutable/chunks/scheduler.CcfLnVM_.js","_app/immutable/chunks/index.B-0vqY2A.js","_app/immutable/chunks/each.DAmsSjCb.js","_app/immutable/chunks/stores.Bff2IPOf.js","_app/immutable/chunks/entry.BEL7CgLR.js","_app/immutable/chunks/index.DYWfvrca.js","_app/immutable/chunks/datepicker.prYrQTUh.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Icon.BWg40YSe.js","_app/immutable/chunks/format.cwXK75ha.js","_app/immutable/chunks/transaction-list.DqjFhoLj.js","_app/immutable/chunks/formatter.1SswtO-0.js","_app/immutable/chunks/empty-table.YdeDD9pJ.js","_app/immutable/chunks/chevron-right.CeidWwH6.js"];
const stylesheets = ["_app/immutable/assets/datepicker.CPeZy3ku.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=14-DrlJszOf.js.map