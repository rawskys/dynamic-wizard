(function() {
	angular
		.module('app')
		.config(config)

	function config($routeProvider) {
		$routeProvider
			.when('/homePage', {
				controller: 'HomeController',
				controllerAs: 'vm',
				template: '<dynamic-wizard page=vm />'
			})
			.when('/confirmPage', {
				template: '<dynamic-wizard />',
				controller: 'ConfirmController'
			})
			.when('/thankYouPage', {
				template: '<dynamic-wizard />',
				controller: 'ThankYouController'
			})
			.otherwise('/homePage')
	}
})()

