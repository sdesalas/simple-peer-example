const express = require('express');

const app = express();

app.use('/', express.static('public'));

app.listen(5001, () => console.log('Listening on 5001...'));
