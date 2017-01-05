(function() {
	'use strict'

	angular
		.module('app')
		.directive('labeledInput', LabeledInput)

	function LabeledInput() {
		return {
			replace: true,
			scope: {
				input: '=',
				name: '@'
			},
			templateUrl: 'labeledInput.html'
		}
	}
})()

