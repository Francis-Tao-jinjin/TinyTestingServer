angular.module('app')
//把请求api的部分单独放在 service 里面，这样其他的controller和模块就都能使用了
.service('PostsSvc', function ($http){
	this.fetch = function() {
		return $http.get('/api/posts');
	};
	this.create = function (post) {
		return $http.post('/api/posts', posts);
	};
})
.service('GetPlanListSvc', function($http, $resource){
	var MRP = $resource('http://localhost:19919/ea-plan');
	var MWP = $resource('http://localhost:19919/ea-plan');
	var OAP = $resource('http://localhost:19919/ea-plan');

	this.MyReadyPlans = [];
	this.MyWaitingPlans = [];
	this.OthersPlans = [];

	this.getUserReadyPlans = function(type){
		return $resource('http://localhost:19919/ea-plan');
	}
	
});