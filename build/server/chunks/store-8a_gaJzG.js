import { d as db } from './db-Dt_6_ZQU.js';

async function getStoreByMember(memberId) {
  const res = await db.query(
    "select * from mt_store s left join mt_store_info msi on msi.id_store = s.id where id_member = $1",
    [memberId]
  );
  return res?.rows[0] ?? null;
}
async function createStore(data) {
  try {
    const res = await db.query(
      "insert into mt_store (id_member, name, description, email, phone, domain) values ($1, $2, $3, $4, $5, $6) returning id",
      [data.memberId, data.name, data.description, data.email, data.phone, data.domain]
    );
    return {
      error: null,
      data: res?.rows[0] ?? null
    };
  } catch (error) {
    console.log(error);
    if (error.code == 23505) {
      return {
        error: "Domain sudah terdaftar",
        data: null
      };
    }
    return {
      error: "Terjadi kesalahan",
      data: null
    };
  }
}
async function updateStore(params) {
  try {
    const res = await db.query(
      "update mt_store set name = $2, description = $3, email = $4, phone = $5, theme = $6, color = $7 where id_member = $1 returning id",
      [
        params.memberId,
        params.name,
        params.description,
        params.email,
        params.phone,
        params.theme,
        params.color
      ]
    );
    return {
      error: null,
      data: res?.rows[0] ?? null
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Terjadi kesalahan",
      data: null
    };
  }
}
async function updateStoreInfo(params) {
  try {
    const store = await db.query("select id from mt_store where id_member = $1", [params.memberId]);
    const storeId = store?.rows[0].id;
    console.log(storeId);
    let result;
    result = await db.query(
      `update mt_store_info set tiktok = $2, fb = $3, ig = $4, twitter = $5, telegram = $6 where id_store = $1 returning id;`,
      [storeId, params.tiktok, params.fb, params.ig, params.twitter, params.telegram]
    );
    if (!result?.rows || result?.rows.length <= 0) {
      result = await db.query(
        `insert into mt_store_info (id_store, tiktok, fb, ig, twitter, telegram) values ($1, $2, $3, $4, $5, $6);`,
        [storeId, params.tiktok, params.fb, params.ig, params.twitter, params.telegram]
      );
    }
    return {
      error: null,
      data: result?.rows[0] ?? null
    };
  } catch (error) {
    console.log(error);
    return {
      error: "Terjadi kesalahan",
      data: null
    };
  }
}
async function getStoreByDomain(host) {
  if (host == "localhost") {
    host = "www.kingplay.id";
  }
  const res = await db.query(
    "select * from mt_store ms left join mt_store_info msi on msi.id_store = ms.id where domain = $1 or custom_domain = $1 limit 1",
    [host]
  );
  return res?.rows[0] ?? null;
}

export { getStoreByMember as a, updateStoreInfo as b, createStore as c, getStoreByDomain as g, updateStore as u };
//# sourceMappingURL=store-8a_gaJzG.js.map