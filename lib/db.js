import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false, // Required for NeonDB's SSL mode
    },
});

export default {
    query: (text, params) => pool.query(text, params),
};
