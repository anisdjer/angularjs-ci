/*global describe, beforeEach, module, inject, it, expect*/
/*jslint nomen: true*/
describe('Post module controllers', function () {
    "use strict";
    beforeEach(module('post'));

    var $controller, $state, $rootScope, $templateCache;

    beforeEach(inject(function ($injector) {
        $controller = $injector.get("$controller");
        $state = $injector.get("$state");
        $rootScope = $injector.get("$rootScope");
        $templateCache = $injector.get("$templateCache");
        
        $templateCache.put('post/views/list.html', '');
    }));

    afterEach(function() {});

    describe("PostMainController", function () {
        it('should be initialized', function () {
            spyOn($state, "go");
            $controller("PostMainController", {$state : $state});

            expect($state.go).toHaveBeenCalledWith("post.list");
        }); 
    });
    

});
