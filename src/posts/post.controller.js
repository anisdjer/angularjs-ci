/*global angular*/
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
angular.module('post')
	.controller('PostMainController', ["PostManager", function (PostManager) {
		"use strict";
		var scope = this;
		this.text = "Hello world !";
		
		this.getPosts = function () {
			return PostManager.getPosts()
				.then(function (posts) {
					return posts;
				});
		};
	}]);