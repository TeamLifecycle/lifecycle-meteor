Package.describe({
	name: 'lifecycle:lifecycle',
	version: '0.0.4',
	summary: 'Meteor package for interfacing with Lifecycle REST api',
	git: 'https://github.com/TeamLifecycle/lifecycle-meteor.git',
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.3');
	api.use('http');
	api.addFiles('lifecycle.js');
	api.export('Lifecycle');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('lifecycle:lifecycle');
	api.addFiles('lifecycle-tests.js');
});
