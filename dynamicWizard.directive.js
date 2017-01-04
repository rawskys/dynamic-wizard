(function() {
	'use strict'

	angular
		.module('app')
		.directive('dynamicWizard', DynamicWizardDirective)

	function DynamicWizardDirective($compile) {
		return {
			scope: {
				page: '='
			},
			links: function (scope, element, attributes, controller) {
				console.log(scope)
				alert(scope.title)
				element.addClass('aaa')
				element.append('fff')
				var wizard = angular.element('<h1>a{{page.title}}b</h1>')
				var template = 'aa<h1>{{configuration.homePage.title}}</h1>' +
					'<div ng-repeat="input in configuration.homePage.mainForm">' +
					'<label>{{input.label}}</label>' +
					'<input ' +
					'placeholder="{{input.placeholder}}" ' +
					'type="{{input.type}}" />' +
					'</div>'
				element.replaceWith(wizard)
			},
			template: '<b>{{page.title}}aaaa</b>'
		}
	}
})()

