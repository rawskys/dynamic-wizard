(function() {
	angular
		.module('app')
		.config(config)

	function config($routeProvider) {
		$routeProvider
			.when('/homePage', {
				controller: 'HomeController',
				controllerAs: 'vm',
				template: '<wizard-page page=vm></wizard-page>'
			})
			.when('/confirmPage', {
				controller: 'ConfirmController',
				controllerAs: 'vm',
				template: '<wizard-page page=vm></wizard-page>'
			})
			.when('/thankYouPage', {
				controller: 'ThankYouController',
				controllerAs: 'vm',
				template: '<wizard-page page=vm></wizard-page>'
			})
			.otherwise('/homePage')
	}
})()

