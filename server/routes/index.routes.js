import { Router } from "express";
import { pool } from '../db.js';
const router = Router();

router.get("/ping", async function (req, res) {
        const [rows] = pool.query("SELECT 1 + 1 as result");
        console.log(rows);
        res.json(rows);
    })

export default router;