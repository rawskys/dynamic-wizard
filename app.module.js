(function() {
	'use strict'

	angular.module('app', ['ngRoute'])

	fetchConfiguration().then(bootstrapApplication);

	function fetchConfiguration() {
		var initInjector = angular.injector(["ng"]);
		var $http = initInjector.get("$http");

		return $http({
				url: 'data.json',
				responseType: 'json'
		})
		.catch(function (errorResponse) {
			throw errorResponse
		})
		.then(function(response) {
			angular
				.module('app')
				.constant("config", response.data);
		})
	}

	function bootstrapApplication() {
		angular.element(document).ready(function() {
			angular.bootstrap(document, ["app"]);
		});
	}	
})()

