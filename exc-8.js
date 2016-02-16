var exp = require('express');
var app = exp();
var fs = require('fs');


app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data){
    if (err) throw err;
    var _str = JSON.parse(data);
    res.send(_str);
  });
});

app.listen(process.argv[2] || _port);

/*
[ref]
fs: https://nodejs.org/api/fs.html#fs_fs_readfile_file_options_callback
*/
