/*global angular*/
(function (app) {
    /**
    * @ngdoc controller
    * @name post.controller:PostMainController
    *
    * @description
    * # main post controller
    *
    * The main post controller
    *
    */
    app.controller('PostMainController', ["PostManager", function (PostManager) {
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