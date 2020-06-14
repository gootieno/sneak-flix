const express = require('express');
const { User } = require('../db/models');

const asyncHandler = require('express-async-handler');

const router = express.Router();
// Get route for user by id
router.get(
	'/:id(\\d+)/',
	asyncHandler(async (req, res) => {
		const userId = parseInt(req.params.id, 10);
		const user = await User.findByPk(userId);
		res.json({ email: user.email, userId: user.id });
	})
);

module.exports = router;
