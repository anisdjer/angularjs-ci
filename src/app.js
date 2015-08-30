/*global angular, document*/
/**
 * @ngdoc overview
 * @name app.controllers
 *
 * @description
 * # main module controllers
 *
 * This module is the main module
 *
 */
angular.module('app.controllers', ['ng']);
/**
 * @ngdoc overview
 * @name app.services
 *
 * @description
 * # main module services
 *
 * This module is the main module
 *
 */

angular.module('app.services', ['ng']);

/**
 * @ngdoc overview
 * @name app
 *
 * @description
 * # main module
 *
 * This module is the main module
 *
 */
angular.module('app', [
	'ng',
	'app.controllers',
	'app.services',
	
	'post',

	'ui.router'
]);

//angular.bootstrap(document, ['app']);