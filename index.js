const express = require('express');
const jsonServer = require('json-server');
const path = require('path');

const app = express();
const port = 8080;

app.use('/api', jsonServer.router(path.join(__dirname, 'db.json')));

app.listen(port, () => {
    console.log(`Running in http://localhost:${port}`);
});