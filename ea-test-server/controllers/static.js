var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));

router.get('/', function(req,res){
	console.log('Someone want to get home page');
	res.sendfile('ea-test-server/public/layouts/plans.html');
});

module.exports = router;