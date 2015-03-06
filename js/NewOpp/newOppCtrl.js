var app = angular.module('salesApp')

app.controller('NewOppCtrl', function($scope, OppService){
	
	$scope.newOpp = {};

	$scope.addOpp = function(){
		OppService.addOpp($scope.newOpp)
		.then(function(){
			$scope.//left off here, need to create a getOpp function, then create functions for each on the service
		})
	}

})