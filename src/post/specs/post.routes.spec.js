/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module routes', function () {
    "use strict";
    beforeEach(module('post'));

    var $state, $rootScope, $location;

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get("$rootScope");
        $location = $injector.get("$location");
        $state = $injector.get("$state");
    }));

    afterEach(function() {});

    describe("main route", function () {
        it('should exist', function () {
            expect($state.href("post")).toEqual('#/posts');
        });
        it('should be called', function () {
            $location.path('/posts');
            $rootScope.$digest();
            expect($state.current.name).toEqual("post");
        });
    });

});
