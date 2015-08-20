/*=============================================================================

	Test proper loading of Lifecycle functions

=============================================================================*/

TinyTest.add('Is Lifecycle object available on server?', function (test) {
	test.notEqual(typeof Lifecycle, 'undefined');
	test.equal(typeof Lifecycle, 'object');
});

TinyTest.add('Is Track function available on server?', function (test) {
	test.notEqual(typeof Lifecycle.Track, 'undefined');
	test.equal(typeof Lifecycle.Track, 'function');
});

TinyTest.add('Is Identify function available on server?', function (test) {
	test.notEqual(typeof Lifecycle.Identify, 'undefined');
	test.equal(typeof Lifecycle.Identify, 'function');
});
