/*global angular*/
angular.module('app')
	.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
		'use strict';
		$stateProvider.state('home', {
			url : "/",
			templateUrl: 'views/home.html'
		}).state('posts', {
			url : "/posts",
			template : '<section><h1>Posts</h1></section>'
		});
		$urlRouterProvider.otherwise('/');
	}]);