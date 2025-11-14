import express from 'express';
import { openDatabase } from "../db.js";

const app = express.Router();
const db = openDatabase();

const createTableSql = `CREATE TABLE IF NOT EXISTS trips (
                    id INTEGER PRIMARY KEY, 
                    city TEXT,
                    country TEXT,
                    date TEXT,
                    notes TEXT,
                    rating INTEGER)`;

db.run(createTableSql, (err) => {
    if (err) {
        return console.error('Error creating table: ', err.message);
    }
    else console.log("Created table successfully.");
});

app.get('/', (req , res) => { 
    db.all('SELECT * FROM trips', [], (err, rows) => {
        if (err) return res.status(500).json({error: err.message});
        res.json(rows);
        console.log('Someone wants to know all the trips');
    });
});

export default app;