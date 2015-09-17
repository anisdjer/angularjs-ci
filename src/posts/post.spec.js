/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module', function () {
	"use strict";
	beforeEach(module('post'));

	var $controller, Post, PostManager, timer, $httpBackend,
		postsMock = [{title : "Titile 1", body : "Body 1"}] ;

	beforeEach(inject(function (_$controller_, _Post_, _PostManager_, _$httpBackend_) {
		$controller = _$controller_;
		$httpBackend = _$httpBackend_;
		
		Post = _Post_;
		PostManager = _PostManager_;
		
		$httpBackend.expect('GET', /.*\/api\/posts/);
		$httpBackend.whenGET(/.*\/api\/posts/)
			.respond(postsMock);
		
		timer = (new Date()).getTime();
	}));
	
	it('should work', function () {
		var postMainController = $controller('PostMainController');

		expect(postMainController.text).toEqual("Hello world !");

		// Test if the function returns a promise.
		expect(postMainController.getPosts().then).toBeDefined();
	});

	describe('PostManagerService', function (done) {

		it('construct method', function () {
			var post = new Post({title : 'My Post'});
			expect(post.title).toBe('My Post');
			
			PostManager.getPosts()
			.then(function (data) {
				expect(data).toEqual(postsMock);
			})
			.finally(done);
			
			$httpBackend.flush()
			
		});
	});
});
