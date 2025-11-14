//requiring the sqlite3 module
import sqlite3 from 'sqlite3';

// creating a database file
export function openDatabase() {
    const db = new sqlite3.Database("./data/travel.db", sqlite3.OPEN_READWRITE,
            (err) => {    
                if (err) console.error('Database', err.message);
                else console.log("Connected to trips database successfully.");
            }
        );
    return db;
}