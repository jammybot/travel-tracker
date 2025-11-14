import { openDatabase } from "./db.js";
import 'log-timestamp';
import express from 'express'; 

//Intialising the SQL database
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

// Routes and express server

const app = express();

app.use(express.json());

app.get('/status', (req, res) => {
  res.json({
    status: 'Running',
    timestamp: new Date().toISOString()
  });
  console.log('Someone pinged')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
