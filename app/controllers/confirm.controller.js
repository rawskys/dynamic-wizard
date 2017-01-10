(function() {
	'use strict'

	angular
		.module('app')
		.controller('ConfirmController', ConfirmController)

	ConfirmController.$inject = ['wizard']

	function ConfirmController (wizard) {
		this.title = wizard.confirmPage.title
		this.form = wizard.confirmForm
		this.mainForm = wizard.mainForm
		this.nextPageAddress = '#!/thankYouPage'
		this.mainFormPreviewed = true
	}
})()

