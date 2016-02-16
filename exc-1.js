var exp = require('express');
var app = exp();

app.get('/home', function(req, res) {
  res.send('Hello World!');
});
var _port = 3000;
if (process.argv[2])
{
  _port = process.argv[2];
}
app.listen(_port);
