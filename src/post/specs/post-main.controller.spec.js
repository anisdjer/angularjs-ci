/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module', function () {
    "use strict";
    beforeEach(module('post'));

    var $controller, $q, $rootScope,
        postsMock = [{title: "Titile 1", body: "Body 1"}];

    beforeEach(inject(function ($injector) {
        $controller = $injector.get("$controller");
        $q = $injector.get("$q");
        $rootScope = $injector.get("$rootScope");
    }));

    afterEach(function() {});

    describe("PostMainController", function () {
        it('should be initialized', function () {
            var postMainController,
                PostManagerMock = {
                    getPosts :  function () {
                        return $q.when(postsMock);
                    }
                };
            
            postMainController = $controller('PostMainController', {PostManager : PostManagerMock});
            expect(postMainController.posts).toEqual([]);

            postMainController.getPosts();

            $rootScope.$digest();

            expect(postMainController.posts).toEqual(postsMock);
        }); 
    });
    

});
