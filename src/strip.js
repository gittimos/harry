exports.stripTags = (someTextWithSSMLTags) => {
	var regex = /(<([^>]+)>)/ig; 
	return someTextWithSSMLTags.replace(regex, "");
}


