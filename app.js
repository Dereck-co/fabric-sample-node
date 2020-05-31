var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
const BE = require('./backend.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.post('*', function(req, res) {
  BE.Call(req.path, req.body, function(result) {
    res.json(result);
  });
});

app.get('/', function (req, res) {
  res.render('default',
  {
    title: '首頁'
  }
  );
});

/* 範例
app.post('/', function (req, res) {
  console.dir(req.body);
  res.send('OK');
});

app.get('/me', function (req, res) {
  res.send('<h1>我的FB</h1>' + 'https://www.facebook.com/witkaiy');
});

app.get('/who/:name?', function (req, res) {
  var name = req.params.name;
  res.send(name + ' 在這邊歐');
});

app.get('/who/:name?/:title?', function (req, res) {
  var name = req.params.name;
  var title = req.params.title;
  res.send('<p>名稱: ' + name + '<br>值稱: ' + title + '</p>');
});

app.get('*', function (req, res) {
  res.send('沒有東西噢');
});
*/

var server = app.listen(3000, function () {
  console.log('Fake API Server Listening on port 3000');
});   