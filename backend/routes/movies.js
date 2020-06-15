const express = require('express');
const { Movie } = require('../db/models');
const asyncHandler = require('express-async-handler');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const movies = await Movie.findAll();
		res.json({ movies });
	})
);

module.exports = router;
