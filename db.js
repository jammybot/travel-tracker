//requiring the sqlite3 module
import sqlite3 from 'sqlite3';

// creating a database file
export async function openDatabase() {
    const db = new sqlite3.Database("./data/travel.db", sqlite3.OPEN_READWRITE);
    return db;
}

// module.exports = { openDatabase };