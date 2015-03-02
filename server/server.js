var express = require('express');
var app = express();
var base = require('./routes/base');

app.set('port', (process.env.PORT || 5000))

app.use('/', base);

var server = app.listen(app.get('port'), function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
