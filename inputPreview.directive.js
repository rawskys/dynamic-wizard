(function() {
	'use strict'

	angular
		.module('app')
		.directive('inputPreview', InputPreview)

	function InputPreview() {
		return {
			replace: true,
			scope: {
				input: '='
			},
			templateUrl: 'inputPreview.html'
		}
	}
})()

