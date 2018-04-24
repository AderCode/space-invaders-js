const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, "../client");

app.use(express.static(publicPath));

let port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running of port ${port}`));