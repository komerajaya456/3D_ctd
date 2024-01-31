
const express = require('express');
const app = express();
const router = require('./routes/route');

app.use('/', router);
//need to show why post method not showing console.log print

app.listen(3000);
