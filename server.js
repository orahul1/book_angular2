var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var books = require('./routes/books');

var port = 3000;

var app = express();

//view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

//Static Foler
app.use(express.static(path.join(__dirname,'client')));
app.use(express.static(__dirname + '/public'));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',books);

app.listen(port,function(){
  console.log('Server started on port ' + port);
});
