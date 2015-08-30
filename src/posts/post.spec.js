/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module', function () {
	"use strict";
	beforeEach(module('post'));

	var $controller, Post, timer;

	beforeEach(inject(function (_$controller_, _Post_) {
		$controller = _$controller_;
		
		Post = _Post_;
		timer = (new Date()).getTime();
	}));
	
	it('should work', function () {
		var postMainController = $controller('PostMainController');

		expect(postMainController.text).toEqual("Hello world !");
	});

	describe('service', function () {

		it('construct method', function () {
			var post = new Post('My Post');
			expect(post.title).toBe('My Post');
		});

	});
});
