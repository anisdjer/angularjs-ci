/*global angular*/
angular.module('post')
	/**
	* @ngdoc controller
	* @name post.controller:PostMainController
	*
	* @description
	* # main post controller
	*
	* The main post controller
	*
	*/
	.controller('PostMainController', ["PostManager", function (PostManager) {
		"use strict";
		var scope = this;
        scope.posts = [];

        scope.init = function () {
			PostManager.getPosts().then(function (posts) {
                scope.posts = posts;
            });
		};

        scope.init();
	}]);
