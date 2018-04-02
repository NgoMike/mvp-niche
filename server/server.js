const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist')));

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`Server Up on port: ${port}`); });

module.exports = app;
