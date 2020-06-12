const express = require('express');
const { Movie } = require('../db/models');
const { asyncHandler } = require('../utils');

const router = express.Router();

router.get(
	'/',
	asyncHandler(async (req, res) => {
		const movies = await Movie.findAll();
		console.log('here');
		res.json({ movies });
	})
);

module.exports = router;
