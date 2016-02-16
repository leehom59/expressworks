var path = require('path');
var exp = require('express');
var app = exp();

var _port = 3000;
var _staticFolder = process.argv[3] || path.join(__dirname, 'public');

// join the path to relative
app.use(exp.static(_staticFolder));
app.listen(process.argv[2] || _port);
