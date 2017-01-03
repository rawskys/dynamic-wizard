angular
	.module('dynamicWizard')
	.service('configuration' , ConfigurationService)

function ConfigurationService($http) {
	return {
		fetch: function() {
			return $http({
					url: 'data.json',
					responseType: 'json'
				})
				.then(function(response) {
					return response.data
				})
		}
	}
}

