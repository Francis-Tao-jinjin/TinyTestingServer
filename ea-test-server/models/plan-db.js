var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/planDB',function(){
	console.log('mongodb connected');
});

module.exports = mongoose;