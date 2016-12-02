var router = require('express').Router();
var Plan = require('../../models/plan');

router.get('/', function(req, res, next){
	Plan.find()
	.sort('-date')
	.exec(function(err, plans){
		if(err){
			return next(err);
		}
		res.header('Access-Control-Allow-Origin', '*');
  		res.header('Access-Control-Allow-Credentials', true);
		res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  		res.header('Access-Control-Allow-Headers', 'Content-Type');
  		//console.log(res);
		res.json(plans);
	});
});

router.post('/', function(req, res, next){
	console.log('plan post received!');
	var myDate = new Date();
	var year = myDate.getFullYear();    //获取完整的年份(4位,1970-????)
	var month =	myDate.getMonth();       //获取当前月份(0-11,0代表1月)
	var date = myDate.getDate();
	var time = myDate.toLocaleTimeString();
	var plan = new Plan({
		planname: req.body.planname,
		assumeTime: 20+Math.round(Math.random()*20),
		creator: req.body.creator,
		lastModify: [year,month,date,time].join('-'),
		type: -1
	});

	plan.save(function (err, plan){
		if(err){
			return next(err);
		}
		
		res.header('Access-Control-Allow-Origin', '*');
  		res.header('Access-Control-Allow-Credentials', true);
		res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  		res.header('Access-Control-Allow-Headers', 'Content-Type');

		res.json(201, plan);
	});
});

module.exports = router;