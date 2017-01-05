(function() {
	'use strict'

	angular
		.module('app')
		.directive('dynamicWizard', DynamicWizardDirective)

	function DynamicWizardDirective($compile) {
		return {
			replace: true,
			scope: {
				page: '='
			},
			templateUrl: 'dynamicWizardPage.html'
		}
	}
})()

