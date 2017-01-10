(function() {
	'use strict'

	angular
		.module('app')
		.component('inputPreview', {
			bindings: {
				input: '='
			},
			templateUrl: 'app/components/inputPreview.html'
		})
})()

