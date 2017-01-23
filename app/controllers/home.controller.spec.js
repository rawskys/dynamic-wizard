describe('HomeController', function() {
	beforeEach(module('app'));

	var $controller;

	beforeEach(function(){
		angular.mock.module('app', function($provide) {
			$provide.service('wizard', function() {
				return {homePage: {title: 'Welcome home'}}
			})
		})
	});

	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('$scope', function() {
		it('sets the title', function() {
			var controller = $controller('HomeController')
			expect(controller.title).toEqual('Welcome home')
		});
	});
});

