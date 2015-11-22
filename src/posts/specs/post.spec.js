/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module', function () {
	"use strict";
	beforeEach(module('post'));

	var $controller, Post, PostManager, timer, $httpBackend,
		postsMock = [{title : "Titile 1", body : "Body 1"}] ;

	beforeEach(inject(function ($injector) {
		$controller = $injector.get("$controller");
		$httpBackend = $injector.get("$httpBackend");

		Post = $injector.get("Post");
		PostManager = $injector.get("PostManager");

		timer = (new Date()).getTime();
	}));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

	it('should work', function () {
		var postMainController = $controller('PostMainController');

        // http expectations
		$httpBackend.expectGET(/.*\/api\/posts/).respond(200, postsMock);

		expect(postMainController.text).toEqual("Hello world !");

		// Test if the function returns a promise.
		expect(postMainController.getPosts().then).toBeDefined();
	});

	describe('PostManagerService', function (done) {

		it('construct method', function () {
			var post = new Post({title : 'My Post'});
			expect(post.title).toBe('My Post');

            // http expectations
            $httpBackend.expectGET(/.*\/api\/posts/).respond(200, postsMock);

			PostManager.getPosts()
                .then(function (data) {
                    expect(data).toEqual(postsMock);
                })
                .finally(done);

            $httpBackend.flush();

		});
	});
});
