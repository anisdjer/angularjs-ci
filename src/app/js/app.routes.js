/*global angular*/
angular.module('app')
	.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
		'use strict';
		$stateProvider.state('home', {
			url : "/",
			templateUrl: 'app/views/home.html'
		});
		$urlRouterProvider.otherwise('/');
	}]);