const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const trashPointsRouter = require('./routes/trashPoints');

const app = express();


app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());


connectDB();


app.use('/api/trash-points', trashPointsRouter);

app.get('/', (req, res) => {
    res.send('API TrashTrack está funcionando!');
});

module.exports = app;