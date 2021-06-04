var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
const PORT = process.env.PORT || 5000
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
server.listen(PORT, () => console.log(`Listening on ${ PORT }`));
