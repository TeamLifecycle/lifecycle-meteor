Lifecycle = {};
var url = process.env.LIFECYCLE_API_URL || 'https://api.lifecycle.io/v1'

Lifecycle.track = function (eventId, uniqueId, properties) {

	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return new Meteor.Error('Lifecycle Authorization Failed', 'LIFECYCLE_API_KEY is not set');
	}

	return HTTP.call("POST", url + "/track", {
		headers: {
			"Content-Type": "application/json",
			"lifecycle-api-key": key
		},
		data: {
			event_id: eventId,
			unique_id: uniqueId,
			properties: properties
		}
	});
};

Lifecycle.identify = function (uniqueId, defaultAttributes, extraAttributes) {

	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return new Meteor.Error('Lifecycle Authorization Failed', 'LIFECYCLE_API_KEY is not set');
	}

	if (!uniqueId || typeof uniqueId !== 'string') {
		return new Meteor.Error('Lifecycle Invalid Parameters', '`uniqueId` must be supplied to `Identify` function');
	}

	var sendData = defaultAttributes;
	sendData.unique_id = uniqueId;
	sendData.attributes = extraAttributes;

	return HTTP.call("POST", url + "/identify", {
		headers: {
			"Content-Type": "application/json",
			"lifecycle-api-key": key
		},
		data: sendData
	});
};
