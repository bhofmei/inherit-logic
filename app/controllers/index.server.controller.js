// Create a new 'render' controller method
exports.render = function(req, res) {
	// Set the safe user object
	const user = (!req.user) ? null : {
		_id: req.user.id,
		name: req.user.name
	};

	// Use the 'response' object to render the 'index' view with a 'title' and 'user' properties
	res.render('index', {
		title: 'Cricket',
		user: JSON.stringify(user)
	});
};
