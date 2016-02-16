var exp = require('express');
var app = exp();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/form', function(req, res) {
  // res.send('<form action="/path" method="POST"><input name="str"><input type="submit" value="送出" /></form>');
  res.send(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2] || 3000);
