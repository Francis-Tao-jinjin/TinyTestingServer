var db = require('./plan-db');

var Plan = db.model('Plan',{
	planname: {type: String, require: true},
	assumeTime: {type: String, require: false},
	creator: {type: String, require: true},
	lastModify: {type: String, require: false},
	type: {type: Number, require: false}
})

module.exports = Plan;