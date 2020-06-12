'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('TvShows', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				allowNull: false,
				type: Sequelize.STRING(100),
			},
			genre: {
				allowNull: false,
				type: Sequelize.STRING(50),
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			source: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('TvShows');
	},
};
