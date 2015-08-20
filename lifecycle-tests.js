/*=============================================================================

	Test proper loading of Lifecycle functions

=============================================================================*/

TinyTest.add('Is Lifecycle object available on server?', function (test) {
	test.notEqual(typeof Lifecycle, 'undefined');
	test.equal(typeof Lifecycle, 'object');
});

TinyTest.add('Is #identify available on server?', function (test) {
	test.notEqual(typeof Lifecycle.Identify, 'undefined');
	test.equal(typeof Lifecycle.Identify, 'function');
});

TinyTest.add('Is #track available on server?', function (test) {
	test.notEqual(typeof Lifecycle.Track, 'undefined');
	test.equal(typeof Lifecycle.Track, 'function');
});

/*=============================================================================

	Test Identify function

=============================================================================*/

TinyTest.add('Does #identify check for existence of api key?', function (test) {
	var apiKey = process.env.LIFECYCLE_API_KEY;
	if (apiKey) { process.env.LIFECYCLE_API_KEY = ''; }
	test.throws(Lifecycle.identify(), 'Lifecycle Authorization Failed');
	process.env.LIFECYCLE_API_KEY = apiKey
});

TinyTest.add('Does #identify check for existence of unique id?', function (test) {
	var apiKey = process.env.LIFECYCLE_API_KEY;
	if (!apiKey) { process.env.LIFECYCLE_API_KEY = 'blah'; }
	test.throws(Lifecycle.identify(), 'Lifecycle Invalid Parameters');
	process.env.LIFECYCLE_API_KEY = apiKey
});

/*=============================================================================

	Test Track function

=============================================================================*/

TinyTest.add('Does #track check for existence of api key?', function (test) {
	var apiKey = process.env.LIFECYCLE_API_KEY;
	if (apiKey) { process.env.LIFECYCLE_API_KEY = ''; }
	test.throws(Lifecycle.track(), 'Lifecycle Authorization Failed');
	process.env.LIFECYCLE_API_KEY = apiKey
});
