const express = require('express');
const os = require('os');
require('dotenv').config();

const app = express();

const PORT = 8000;

app.get('/hostname', (req, res) => {
    res.send(process.env.HOST_NAME || os.hostname());
});

app.get('/author', (req, res) => {
    res.send(process.env.AUTHOR || 'no author');
});

app.get('/id', (req, res) => {
    res.send(process.env.UUID || 'no uuid');
});

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
});