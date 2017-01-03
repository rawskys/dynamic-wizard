(function() {
	'use strict'

	angular
		.module('app')
		.controller('DynamicWizard', ['configuration', DynamicWizardController])

	function DynamicWizardController (configurationService) {
		var vm = this
		vm.title = 'Most dynamic wizard ever!'

		loadConfiguration()

		function loadConfiguration() {
			configurationService.fetch().then(function(configuration) {
				vm.title = configuration.homePage.title
			})
		}
	}
})()

