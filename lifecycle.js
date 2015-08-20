Lifecycle = {};
var url = process.env.API_URL || 'https://api.lifecycle.io/v1'

Lifecycle.TrackEvent = function (eventId, uniqueId, properties) {
	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return console.log("no LIFECYCLE_API_KEY set");
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

Lifecycle.IdentifyUser = function (uniqueId, email, browserToken) {
	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return console.log("no LIFECYCLE_API_KEY set");
	}
	return HTTP.call("POST", url + "/identify", {
		headers: {
			"Content-Type": "application/json",
			"lifecycle-api-key": key
		},
		data: {
			unique_id: uniqueId,
			email_address: email,
			browser_token: browserToken
		}
	});
};
