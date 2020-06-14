'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			email: DataTypes.STRING,
			hashedPassword: DataTypes.STRING,
		},
		{}
	);
	User.associate = function (models) {
		// associations can be defined here
	};

	User.prototype.validatePassword = function (password) {
		return bcrypt.compareSync(password, this.hashedPassword.toString());
	};
	return User;
};
