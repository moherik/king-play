import { d as db } from './db-BEDA57LU.js';

const User = {
  getUserById: async (id) => {
    const res = await db.query("select * from mt_member where id_member = $1", [id]);
    return res.rows[0] ?? null;
  },
  getUserByEmail: async (email) => {
    const res = await db.query("select * from mt_member where email = $1", [email]);
    return res.rows[0] ?? null;
  },
  createUser: async (data) => {
    try {
      const res = await db.query(
        "insert into mt_member (email, email_verified, password, name, image) values ($1, $2, $3, $4, $5) returning id_member",
        [data.email, data.emailVerified, data.password ?? "", data.name, data.image]
      );
      return {
        error: null,
        data: res.rows[0] ?? null
      };
    } catch (error) {
      console.log(error);
      if (error.code == 23505) {
        return {
          error: "Email sudah terdaftar",
          data: null
        };
      }
      return {
        error: "Terjadi kesalahan",
        data: null
      };
    }
  },
  createSession: async ({ userId, expires, sessionToken }) => {
    await db.query("insert into sessions (user_id, expires, session_token) values ($1, $2, $3)", [
      userId,
      expires,
      sessionToken
    ]);
  },
  getAccountByProvider: async (providerAccountId, provider) => {
    const res = await db.query(
      "select * from accounts a left join mt_member mm on mm.id_member = a.user_id where provider_account_id = $1 and provider = $2",
      [providerAccountId, provider]
    );
    return res.rows[0] ?? null;
  }
};

export { User as U };
//# sourceMappingURL=user-DOIS7Uio.js.map
