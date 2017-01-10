(function() {
	'use strict'

	angular
		.module('app')
		.component('wizardPage', {
			bindings: {
				page: '='
			},
			templateUrl: 'app/components/wizardPage.html'
		})
})()

