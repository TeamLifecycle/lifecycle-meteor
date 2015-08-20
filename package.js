Package.describe({
	name: 'lifecycle:lifecycle',
	version: '0.0.2',
	summary: 'Meteor package for interfacing with Lifecycle REST api',
	git: 'https://github.com/TeamLifecycle/lifecycle-meteor.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.addFiles('lifecycle.js');
	api.export('Lifecycle', 'server');
});

Package.onTest(function(api) {
	api.use('tinytest', 'server');
	api.use('lifecycle:lifecycle', 'server');
	api.addFiles('lifecycle-tests.js');
});
