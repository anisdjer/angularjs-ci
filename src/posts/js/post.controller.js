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
		scope.text = "Hello world !";

		scope.init = function () {
	        scope.getPosts();
        };

		scope.getPosts = function () {
			return PostManager.getPosts()
				.then(function (posts) {
					return posts;
				});
		};

	}]);
