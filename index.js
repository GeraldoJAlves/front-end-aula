const express = require('express')

const app = express();
app.use('/assets', express.static('assets'));
app.use('/', express.static('src'));

app.listen(3000)