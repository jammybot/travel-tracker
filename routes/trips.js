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

app.post('/', (req, res) => {
    const { city, country, date, notes, rating } = req.body;
    const sql = 'INSERT INTO trips (city, country, date, notes, rating) VALUES (?, ?, ?, ?, ?)';
    const params = [city, country, date, notes, rating];
    db.run(sql, params, function (err) {
        if (err) return res.status(500).json({error: err.message});
        res.json({id: this.lastID, city, country, date, notes, rating});
        console.log('Someone has added a trip');
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM trips WHERE id = ?';
    db.run(sql, [id], function (err) {
        if (err) return res.status(500).json({error: err.message});
        res.json({deleted: this.changes});
        console.log('Someone has deleted a trip');
    });
});

export default app;