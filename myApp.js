var myApp = angular.module('myApp', [])

myApp.service('configurationService' , function($http) {
	return {
		fetch: function() {
			return $http.get('data.json')
				.then(function(response) {
					return response.data
				})
		}
	}
})

myApp.directive('dynamicForm', function($compile) {
	return {
		controller: ['$scope', 'configurationService', function($scope, configurationService) {
			configurationService.fetch().then(function(configuration) {
				$scope.configuration = configuration
			})
		}],
		link: function (scope, element) {
			var template = '<h1>{{configuration.homePage.title}}</h1>' +
				'<div ng-repeat="input in configuration.homePage.mainForm">' +
				'<label>{{input.label}}</label>' +
				'<input ' +
				'placeholder="{{input.placeholder}}" ' +
				'type="{{input.type}}" />' +
				'</div>'
			element.replaceWith($compile(template)(scope))
		},
		template: '<b>To be replaced...</b>'
	}
})

