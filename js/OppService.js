var app = angular.module('oppApp');

app.servicer('OppService', function(){

	this.addOpp = function(opp){
		var deferred = $q.defer();
		$http({
			method: 'POST',
			url: 'https://rockys-app.firebaseio.com/',
			data: opp
		}).then(function(data){
			deferred.resolve(data)
		})
		return deferred.promise
	}

	this.getOpp = function(opps){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'https://rockys-app.firebaseio.com/'
		}).then(function(response){
			deferred.resolve(response)
		})
		return deferred.promise
	}

})