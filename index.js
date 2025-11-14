import { openDatabase } from "./db.js";
import 'log-timestamp'; 

//requiring the sqlite3 module
async function connectDB () {
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
            return console.error('Database', err.message);
        }
        else console.log("Connected to trips database successfully.");
    });
}

connectDB()

