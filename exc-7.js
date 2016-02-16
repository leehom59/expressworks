var exp = require('express');
var app = exp();

// * no need use body-parser *
// var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));

app.get('/search', function(req, res){
  res.send(req.query);
});

app.listen(process.argv[2] || 3000);
