const { validationResult } = require('express-validator');
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

const handleValidationErrors = (req, res, next) => {
	const validateErrors = validationResult(req);
	if (!validateErrors.isEmpty()) {
		const errors = validateErrors.array().map((error) => error.msg);
		const err = Error('Bad Request.');
		err.errors = errors;
		err.status = 400;
		err.title = 'Bad request';
		return next(err);
	}
	next();
};

module.exports = { csrfProtection, handleValidationErrors };
