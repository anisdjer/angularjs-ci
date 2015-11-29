/*global angular*/
(function (app) {
    "use strict";
    app.config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state("post", {
                url : "/posts",
                template : '<section data-ui-view="post"></section>',
                controller : ["$state", function ($state) {
                    $state.go("post.list");
                }]
            })
            .state("post.list", {
                views : {
                    "post" : {
                        templateUrl : "post/views/list.html"
                    }
                }
             });
    }]);
}(angular.module('post')));

