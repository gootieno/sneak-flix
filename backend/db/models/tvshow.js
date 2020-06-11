'use strict';
module.exports = (sequelize, DataTypes) => {
	const TvShow = sequelize.define(
		'TvShow',
		{
			title: DataTypes.STRING,
			genre: DataTypes.STRING,
			description: DataTypes.STRING,
		},
		{}
	);
	TvShow.associate = function (models) {
		// associations can be defined here
	};
	return TvShow;
};
