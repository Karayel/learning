var express = require('express');
var path = require('path');
var app = express()

app.get('/home', function(req, res) {
	res.render('index', {date: new Date().toDateString()})
})

app.set('views', process.argv[3])

app.set('view engine', 'jade')

app.listen(process.argv[2])