var exp = require('express');
var app = exp();

app.put('/message/:id', function(req, res) {
  var _id = req.params.id;
  var str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + _id)
    .digest('hex');

  res.send(str);
});

app.listen(process.argv[2] || 3000);
