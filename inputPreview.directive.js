(function() {
	'use strict'

	angular
		.module('app')
		.directive('inputPreview', InputPreview)

	function InputPreview() {
		return {
			scope: {
				input: '='
			},
			templateUrl: 'inputPreview.html'
		}
	}
})()

