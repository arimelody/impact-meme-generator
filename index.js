const fs = require('fs');
const path = require('path');
const https = require('https');
const express = require('express');
const app = express();

const PORT = 443;
const options = {
    cert: fs.readFileSync('./certs/mellodoot.pem'),
    key: fs.readFileSync('./certs/mellodoot.key')
}

app.use(express.json());

app.use('/', express.static(path.join(__dirname, './static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

https.createServer(options, app).listen(PORT, () => {
    console.log(`https server now running on https://localhost:${PORT} !`);
});