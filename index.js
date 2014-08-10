var express = require('express');
var app = express();
var rhyme = require('rhyming');
var handlebars = require('express3-handlebars').create({ defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	rhyme.rhymesWith.init();
  res.render('home',{
  	word: rhyme.rhymesWith.word,
  	array: rhyme.rhymesWith.newArray(rhyme.rhymesWith.array)
  	
  });

});
app.use(function(req,res,next){
  res.status(404);
  res.render('404');
});
app.use(function(err,req,res,next){
  res.status(500);
  res.render('500');
});


app.listen(3000);
