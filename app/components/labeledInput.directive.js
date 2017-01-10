(function() {
	'use strict'

	angular
		.module('app')
		.component('labeledInput', {
			bindings: {
				input: '=',
				name: '@'
			},
			templateUrl: 'app/components/labeledInput.html'
		})
})()

