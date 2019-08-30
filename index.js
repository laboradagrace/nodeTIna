var student = require("./Student")
var readLine = require("readline-sync")
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World');
  let yol = new student();
  yol.setName(readLine.question('May I have your name:  '))
  yol.setSchedule(readLine.question('add Schedule:  '))
  yol.getInfo()
})

var server = app.listen(8081, function() {
  var host = server.address().address
  var port = server.address().port


  console.log("Example app listening at http://%s:%s", host, port)
})
