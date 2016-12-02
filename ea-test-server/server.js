var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jwt-simple');

//不使用express的router时
//var api = require('./controllers/api/posts-old');

//使用express的router时
var api_default = require('./controllers/static'); 
var api_ea_plan = require('./controllers/api/ea-plan');

var app = express();
app.use(bodyParser.json());

//不使用express的router时
//api(app);

//使用express的router时(未使用命名空间的方法)
//app.use(api);

//使用express的router时(使用了命名空间的方法)
app.use('/',api_default);

app.use('/ea-plan',api_ea_plan);
/*
app.get('/', function (req, res){
	console.log('Someone want to get home page');
	res.sendfile('chapter_5/public/layouts/posts.html');
});
*/
app.listen(9700, function(){
	console.log('Server listening on', 9700);
});