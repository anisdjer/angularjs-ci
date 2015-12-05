/*global angular*/
(function (app) {
    /**
    * @ngdoc controller
    * @name post.controller:PostMainController
    *
    * @description
    * # post main controller
    *
    * The post main controller
    *
    */
    app.controller('PostMainController', ["$state", function ($state) {
        $state.go("post.list");
    }]);
    /**
    * @ngdoc controller
    * @name post.controller:PostListController
    *
    * @description
    * # post list controller
    *
    * The post list controller
    *
    */
    app.controller('PostListController', ["PostManager", function (PostManager) {
        "use strict";
        var scope = this;
        scope.posts = [];

        /**
        * @ngdoc function
        * @name post.controller:PostMainController#getPosts
        * @methodOf post.controller:PostMainController
        * @description
        * fetch posts from the API.
        *
        * @return {Promise<Post[]>} posts Array of posts
        */
        scope.getPosts = function () {
            return PostManager.getPosts().then(function (posts) {
                scope.posts = posts;
            });
        };
    }]);
}(angular.module('post')));