angular
	.module('dynamicWizard')
	.directive('dynamicWizard', DynamicWizardDirective)

function DynamicWizardDirective($compile) {
	return {
		controller: 'dynamicWizard',
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
}

