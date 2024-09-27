import { r as redirect } from './index-DzcLzHBX.js';
import { r as request } from './request-NgL59NDw.js';
import 'date-fns';
import 'fs';
import 'crypto';
import 'nanoid';

const load = async ({ url, cookies }) => {
  const userId = cookies.get("uuid");
  try {
    const base64data = url.searchParams.get("d") ?? "";
    const checkoutData = JSON.parse(atob(base64data));
    if (!checkoutData) {
      throw new Error("Error parsing data");
    }
    const checkoutUserId = checkoutData.data.id_user;
    if (checkoutUserId != userId) {
      throw new Error("Invalid user");
    }
    const invoiceDet = checkoutData.additional.response_invoice_detail;
    if (!invoiceDet) {
      throw new Error("Invoice data not found");
    }
    const invoiceData = {
      channel: invoiceDet.channel,
      checkoutUrl: invoiceDet.checkout_url,
      idChannel: invoiceDet.id_channel_pembayaran,
      idInquiry: invoiceDet.id_transaksi_inquiry,
      idInvoice: invoiceDet.id_invoice,
      panduan: invoiceDet.panduan,
      payUrl: invoiceDet.pay_url,
      reffIdBiller: invoiceDet.reff_id_biller,
      timeLimit: new Date(invoiceDet.time_limit),
      total: invoiceDet.total
    };
    console.log(invoiceData);
    const { data } = await request({
      method: "POST",
      endpoint: "/v1.0/api/invoices/check/",
      payload: {
        id_invoice: invoiceData.idInvoice,
        id_user: userId
      },
      uuid: userId
    });
    let flag = data?.flag ?? "Selesaikan Pembayaran";
    let status = data?.status ?? 1;
    return {
      flag,
      status,
      invoice: invoiceData
    };
  } catch (error) {
    console.log(error);
    redirect(307, "/");
  }
};

var _page_server_ts = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 20;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-kbUnp0aN.js')).default;
const server_id = "src/routes/(homepage)/payment/+page.server.ts";
const imports = ["_app/immutable/nodes/20.BQkLGQ9F.js","_app/immutable/chunks/scheduler.BocGr1Ux.js","_app/immutable/chunks/index.BQZXa2CZ.js","_app/immutable/chunks/formatter.1SswtO-0.js","_app/immutable/chunks/clock.Br8RMJJq.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/Icon.Beuh8PMk.js","_app/immutable/chunks/each.Tt0-nXae.js","_app/immutable/chunks/format.cwXK75ha.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server_ts as server, server_id, stylesheets };
//# sourceMappingURL=20-CqTVc19Q.js.map
