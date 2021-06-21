const express = require('express')

const app = express();
app.use('/assets/libs/fontawesome-free', express.static('./node_modules/@fortawesome/fontawesome-free'));
app.use('/', express.static('src'));

app.listen(3000)