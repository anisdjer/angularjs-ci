/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module', function () {
    "use strict";
    beforeEach(module('post'));

    var PostManager, Post, $httpBackend, $rootScope;

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get("$httpBackend");
        $rootScope = $injector.get("$rootScope");
        Post = $injector.get("Post");
        PostManager = $injector.get("PostManager");
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });

    describe("PostManager", function (done) {
        it('should be initialized and expose list of functions', function () {
            expect(PostManager.getPosts).toBeDefined();
        });
        it('should fetch list of posts from API', function () {
            var postsMock = [new Post({title: "Titile 1", body: "Body 1"})];
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
