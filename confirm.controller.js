(function() {
	'use strict'

	angular
		.module('app')
		.controller('ConfirmController', ConfirmController)

	ConfirmController.$inject = ['wizard']

	function ConfirmController (wizard) {
		this.title = wizard.confirmPage.title
		this.nextPageAddress = '#!/thankYouPage'
	}
})()

