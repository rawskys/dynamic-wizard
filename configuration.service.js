(function() {
	'use strict'

	angular
		.module('app')
		.service('configuration' , ConfigurationService)

	function ConfigurationService($http) {
		return {
			fetch: fetchConfigurationFileAsPromise
		}

		function fetchConfigurationFileAsPromise() {
			return $http({
					url: 'data.json',
					responseType: 'json'
				})
				.then(function(response) {
					return response.data
				})
		}
	}
})()

