var app = angular.module('salesApp')

app.controller('NewOppCtrl', function($scope, OppService){
	
	$scope.newOpp = {};

	$scope.addOpp = function(){
		OppService.addOpp($scope.newOpp)
		.then(function(){
			$scope.getOpp();
		})
	};

	$scope.getOpp = function(){
		OppService.getOpp()
		.then(function(data){
			$scope.opps = data.opps
		})
	};

})