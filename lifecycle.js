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

Lifecycle.IdentifyUser = function (uniqueId, data, extraAttributes) {
	var key = process.env.LIFECYCLE_API_KEY;
	if (!key) {
		return console.log("no LIFECYCLE_API_KEY set");
	}
	if (!uniqueId) {
		return console.log("Must provide `uniqueId` to IdentifyUser");
	}
	return HTTP.call("POST", url + "/identify", {
		headers: {
			"Content-Type": "application/json",
			"lifecycle-api-key": key
		},
		data: {
			unique_id		: uniqueId,
			first_name		: data.firstName,
			last_name		: data.lastName,
			email_address	: data.email,
			phone_number	: data.phone,
			apns_token		: data.apns,
			gcm_token		: data.gcm,
			browser_token	: data.browser,
			street_address	: data.street,
			city			: data.city,
			state			: data.state,
			zip_code		: data.zip,
			device_type		: data.deviceType
			attributes 		: extraAttributes || {}
		}
	});
};
