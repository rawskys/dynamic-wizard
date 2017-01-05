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
			template: '<h1>{{page.title}}</h1><form action="{{page.nextPageAddress}}"><input type="submit" value="Go" /></form>'
		}
	}
})()

