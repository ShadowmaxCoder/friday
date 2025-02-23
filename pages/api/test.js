import db from "../../lib/db";

export default async function handler(req, res) {
    try {
        const result = await db.query("SELECT NOW()");
        res.status(200).json({ message: "Database connected!", time: result.rows[0].now });
    } catch (error) {
        res.status(500).json({ error: "Database connection failed", details: error.message });
    }
}
