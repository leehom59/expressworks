var exp = require('express');
var path = require('path');
var app = exp();
var bodyParser = require('body-parser');

// ref : https://github.com/stylus/stylus
app.use(require('stylus').middleware(process.argv[3]));
app.use(exp.static(process.argv[3]));

app.listen(process.argv[2] || 3000);
