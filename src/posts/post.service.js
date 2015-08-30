
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
	 */
	.factory('Post', function () {
		
		return function Post (title) {
	  		this.title = title;
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
	.factory("PostManager", ["$http", "$q", function ($http, $q) {
		
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