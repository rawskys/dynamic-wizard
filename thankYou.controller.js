(function() {
	'use strict'

	angular
		.module('app')
		.controller('ThankYouController', ThankYoutroller)

	ThankYoutroller.$inject = ['wizard']

	function ThankYoutroller (wizard) {
		this.title = wizard.thankYouPage.title
	}
})()

