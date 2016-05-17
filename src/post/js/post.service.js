/*global angular*/
(function (app) {
    "use strict";
    /**
     * @ngdoc service
     * @name post.service:Post
     *
     * @description
     * # post model
     *
     * The post model
     *
     * @property {string} title the post title.
     */
    app.factory('Post', function () {

        return function Post(post) {
            post = post || {};
            this.title = post.title || "Title";
        };
    });

    /**
     * @ngdoc service
     * @name post.service:PostManager
     * 
     * @requires $http
     * @requires $q
     * @requires post.service:Post
     * 
     * @description
     * # post manager
     *
     * The post manager
     * 
     *
     */
    app.factory("PostManager", ["$http", "$q", "Post", function PostManager($http, $q, Post) {
        /**
        * @ngdoc function
        * @name post.service:PostManager#getPosts
        * @methodOf post.service:PostManager
        * @description
        * fetch posts from the API.
        *
        * @return {Promise} posts
        */
        function getPosts() {
            var defer = $q.defer();
            $http.get("data/posts.json")
                .then(function (response) {
                    var result = [];
                    angular.forEach(response.data, function (post) {
                        result.push(new Post(post));
                    });
                    defer.resolve(result);
                });
            return defer.promise;
        }

        return {
            getPosts : getPosts
        };
    }]);
}(angular.module('post')));

