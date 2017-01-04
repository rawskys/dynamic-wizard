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
				controller: 'ConfirmController',
				controllerAs: 'vm',
				template: '<dynamic-wizard page=vm />'
			})
			.when('/thankYouPage', {
				controller: 'ThankYouController',
				controllerAs: 'vm',
				template: '<dynamic-wizard page=vm />'
			})
			.otherwise('/homePage')
	}
})()

