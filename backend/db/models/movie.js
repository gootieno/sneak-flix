'use strict';
module.exports = (sequelize, DataTypes) => {
	const Movie = sequelize.define(
		'Movie',
		{
			title: DataTypes.STRING,
			genre: DataTypes.STRING,
			description: DataTypes.STRING,
			length: DataTypes.STRING,
			source: DataTypes.STRING,
		},
		{}
	);
	Movie.associate = function (models) {
		// associations can be defined here
	};
	return Movie;
};
