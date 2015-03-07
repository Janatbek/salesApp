var app = angular.module('oppApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: 'js/NewOpp/newOpp.html',
			controller: 'newOppCtrl'
		})
})