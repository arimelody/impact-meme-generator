const fs = require('fs');
const path = require('path');
const http = require('http');
const express = require('express');
const app = express();

const PORT = 8080;

app.use(express.json());

app.use('/', express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

http.createServer(app).listen(PORT, () => {
    console.log(`http server now running on http://localhost:${PORT}`);
});
