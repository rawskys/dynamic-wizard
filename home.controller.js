(function() {
	'use strict'

	angular
		.module('app')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['wizard']

	function HomeController (wizard) {
		this.title = wizard.homePage.title
	}
})()

