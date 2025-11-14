import express from 'express';
const app = express.Router();

app.get('/', (req, res) => {
    res.json({
        status: 'Running',
        timestamp: new Date().toISOString()
    });
    console.log('Someone pinged');
});

export default app;