angular.module('app')
.controller('PlansCtrl', function ($scope, $resource, PostsSvc, GetPlanListSvc){

	$scope.plans = GetPlanListSvc.getUserReadyPlans(1).query();
	s
	//$resource('http://localhost:19919/ea-plan').query();
	//GetPlanListSvc.getUserReadyPlans.get();

	/*
	PostsSvc.fetch().success(function (posts){
		$scope.posts = posts;
	})
	.error(function (err){
		console.log(err);
	});

	$scope.addPost = function(){
		if($scope.postBody){
			PostsSvc.create({
				username: 'dickeyxxx',
				body: $scope.postBody
			})
			.success(function (post){
				$scope.posts.unshift(post);
				$scope.postBody = '';
			});
		}
	};
	*/
});