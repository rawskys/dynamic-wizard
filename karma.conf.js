module.exports = function(config) {
	config.set({
		browsers: ['PhantomJS'],
		frameworks: ['jasmine'],
		files: [
			'node_modules/angular/angular.js',
			'node_modules/angular-route/angular-route.js',
			'app/app.module.js',
			'app/services/wizard.service.js',
			'app/controllers/home.controller.js',
			'app/controllers/confirm.controller.js',
			'app/controllers/thankYou.controller.js',
			'app/components/labeledInput.directive.js',
			'app/components/inputPreview.directive.js',
			'app/components/wizardPage.directive.js',
			'node_modules/angular-mocks/angular-mocks.js',
			'app/**/*.spec.js'
		],
		reporters: ['progress', 'coverage'],
		preprocessors: {
			'app/**/!(*.spec).*': ['coverage']
		},
		coverageReporter: {
			type: 'html',
			dir: 'coverage/'
		}
	})
}

