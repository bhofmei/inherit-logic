// Load the module dependencies
const mongoose = require('mongoose');
const Scenario = mongoose.model('Scenario');

// Create a new error handling controller method
const getErrorMessage = function(err) {
    if (err.errors) {
        for (const errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

// Create a new controller method that creates new articles
exports.create = function(req, res) {
    // Create a new article object
    const article = new Scenario(req.body);

    // Try saving the article
    article.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(article);
        }
    });
};

// Create a new controller method that retrieves a list of articles
exports.list = function(req, res) {
    // Use the model 'find' method to get a list of articles
    //Scenario.find().sort('-created').populate('creator', 'firstName lastName fullName').exec((err, articles) => {
  Scenario.find((err, scenarios) => {
        if (err) {
            // If an error occurs send the error message
          console.log(err);
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(scenarios);
        }
    }).sort('degOfDiff');
};

// Create a new controller method that returns an existing article
exports.read = function(req, res) {
    res.json(req.scenario);
};

// Create a new controller method that updates an existing article
exports.update = function(req, res) {
    // Get the article from the 'request' object
    const article = req.article;

    // Update the article fields
    article.title = req.body.title;
    article.content = req.body.content;

    // Try saving the updated article
    article.save((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(article);
        }
    });
};

// Create a new controller method that delete an existing article
exports.delete = function(req, res) {
    // Get the article from the 'request' object
    const article = req.article;

    // Use the model 'remove' method to delete the article
    article.remove((err) => {
        if (err) {
            // If an error occurs send the error message
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // Send a JSON representation of the article
            res.json(article);
        }
    });
};

// Create a new controller middleware that retrieves a single existing scenario
exports.scenarioByCode = function(req, res, next, id) {
    // Use the model 'findOneByCode' method to find a single scenario
    Scenario.findOne({scenCode: id}, (err, scenario) => {
        if (err) return next(err);
        if (!scenario) return next(new Error('Failed to load scenario ' + id));

        // If an scenario is found use the 'request' object to pass it to the next middleware
        req.scenario = scenario;

        // Call the next middleware
        next();
    });
};

// Create a new controller middleware that is used to authorize an article operation
exports.hasAuthorization = function(req, res, next) {
    // If the current user is not the creator of the article send the appropriate error message
    if (req.article.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }

    // Call the next middleware
    next();
};
