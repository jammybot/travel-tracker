import 'log-timestamp';
import express from 'express'; 
import tripsRouter from "./routes/trips.js";
import statusRouter from "./routes/status.js";

const app = express();
const port = 3000 || process.env.PORT;

// Routes and express server
app.use(express.json());
app.use("/api/trips", tripsRouter);
app.use("/api/status", statusRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });
