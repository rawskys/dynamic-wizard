(function() {
	'use strict'

	angular
		.module('app')
		.service('wizard' , wizard)

	wizard.$inject = ['config']

	function wizard(config) {
		this.homePage = config.homePage
	}
})()

