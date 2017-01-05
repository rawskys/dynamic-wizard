(function() {
	'use strict'

	angular
		.module('app')
		.directive('dynamicWizard', DynamicWizardDirective)

	function DynamicWizardDirective($compile) {
		return {
			scope: {
				page: '='
			},
			templateUrl: 'dynamicWizardPage.html'
		}
	}
})()

