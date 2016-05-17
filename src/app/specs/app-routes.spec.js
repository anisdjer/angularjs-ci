/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('App module routes', function () {
    "use strict";
    beforeEach(module('app'));

    var $state, $rootScope, $location, $templateCache;

    beforeEach(inject(function ($injector) {
        $rootScope = $injector.get("$rootScope");
        $state = $injector.get("$state");
        $location = $injector.get("$location");
        $templateCache = $injector.get("$templateCache");
        
        $templateCache.put('app/views/home.html', '');
    }));

    afterEach(function() {});

    describe("home route", function () {
        it('should be called', function () {
            $rootScope.$digest();
            expect($state.current.name).toEqual("home");
        });
        it('should return to home on otherwise', function () {
            $location.path('/whatever path is passed');
            $rootScope.$digest();
            expect($state.current.name).toEqual("home");
        });
    });

});
