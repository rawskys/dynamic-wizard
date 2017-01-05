(function() {
	'use strict'

	angular
		.module('app')
		.directive('labeledInput', LabeledInput)

	function LabeledInput() {
		return {
			scope: {
				input: '='
			},
			templateUrl: 'labeledInput.html'
		}
	}
})()

