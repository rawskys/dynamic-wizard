(function() {
	'use strict'

	angular
		.module('app')
		.controller('HomeController', HomeController)

	HomeController.$inject = ['wizard']

	function HomeController (wizard) {
		var vm = this
		vm.title = wizard.homePage.title
		vm.form = wizard.mainForm
		vm.nextPageAddress = '#!/confirmPage'
	}
})()

