angular
	.module('dynamicWizard')
	.controller('dynamicWizard', ['configuration', DynamicWizardController])

function DynamicWizardController (configurationService) {
	this.title = 'Most dynamic wizard ever!'
	var wizard = this
	configurationService.fetch().then(function(configuration) {
		wizard.title = configuration.homePage.title
	})
}

