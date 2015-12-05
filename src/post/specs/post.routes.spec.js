/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module routes', function () {
    "use strict";
    beforeEach(module('post'));

    var $state, $rootScope;

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get("$rootScope");
        $state = $injector.get("$state");
    }));

    afterEach(function() {});

    describe("main route", function () {
        it('should be called', function () {
            expect($state.href("post")).toEqual('#/posts');
            $rootScope.$digest();
            expect($state.href("post")).toEqual('#/posts');
        });
    });

});
