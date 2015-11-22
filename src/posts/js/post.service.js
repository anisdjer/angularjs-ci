
angular.module('post')
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
	.factory('Post', function () {
		
		return function Post (post) {
			post = post || {};
			this.title = post.title;
		};
	})
	
	/**
	 * @ngdoc service
	 * @name post.service:PostManager
	 *
	 * @description
	 * # post manager
	 *
	 * The post manager
	 *
	 */
	.factory("PostManager", ["$http", "$q", "Post", function ($http, $q, Post) {
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
			$http.get("http://communityjs-anisbouhachem.rhcloud.com/api/posts")
				.then(function (response) {
					defer.resolve(response.data);
				});
			return defer.promise;
		}
		
		
		return {
			getPosts : getPosts
		};
	}]);

