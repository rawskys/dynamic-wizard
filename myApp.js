var dynamicWizard = angular.module('dynamicWizard', [])

dynamicWizard.service('configurationService' , function($http) {
	return {
		fetch: function() {
			return $http.get('data.json')
				.then(function(response) {
					return response.data
				})
		}
	}
})

dynamicWizard.controller('wizard', ['configurationService', function(configurationService) {
	this.title = 'Most dynamic wizard ever!'
	var wizard = this
	configurationService.fetch().then(function(configuration) {
		wizard.title = configuration.homePage.title
	})
}])

dynamicWizard.directive('dynamicWizard', function($compile) {
	return {
		controller: 'wizard',
		compileNowhere: function () {
		},
		link: function (scope, element, attributes, controller) {
			alert(element.toString())
			element.addClass('aaa')
			element.append('fff')
			var wizard = angular.element('<h1>' + controller.title + '</h1>')
			var template = '<h1>{{configuration.homePage.title}}</h1>' +
				'<div ng-repeat="input in configuration.homePage.mainForm">' +
				'<label>{{input.label}}</label>' +
				'<input ' +
				'placeholder="{{input.placeholder}}" ' +
				'type="{{input.type}}" />' +
				'</div>'
			element.replaceWith(wizard)
		},
		template: '<b>Title from scope:</b> {{title}}'
	}
})

