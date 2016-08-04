/**
 * Created by liuru on 16-8-3.
 */
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extend: true}));
app.use(bodyParser.json());

app.post('/suer', function (req, res) {    //query类型
    res.send(req.query);
});
app.get('/:user', function (req, res) {       //params类型
    res.send(req.params);
});

app.post('/json', function (req, res) {       //json类型
    res.send(req.body);
});

app.post('/', function (req, res) {              //www类型
    res.send(req.body);
});

app.post('/header', function (req, res) {         //header类型
    res.send(req.get('name'));
});

app.listen(3000, function () {
    console.log('example app listening on port 3000!');
});

module.exports = app;