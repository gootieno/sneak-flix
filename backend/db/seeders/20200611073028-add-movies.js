'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Movies',
			[
				{
					title: 'Inception',
					genre: 'action',
					description:
						"A thief who possesses the power to enter into the dreams of others. Dom Cobb (Leonardo DiCaprio) doesn't steal things, he steals ideas.",
					length: '2hrs 28min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/inception.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Avengers Age Of Ultron',
					genre: 'action',
					description:
						'When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong',
					length: '2hrs 21min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/Avengers-age-of-ultron.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Alpha',
					genre: 'action',
					description:
						'In the prehistoric past, a young man separated from his tribe finds a similarly lost wolf companion',
					length: '1hr 36min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/alpha-trailer-2_h1080p.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Fast and Furious 6',
					genre: 'action',
					description:
						'Hobbs has Dominic and Brian reassemble their crew to take down a team of mercenaries',
					length: '2hrs 10min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/fastandfurious6.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'I Am Legend',
					genre: 'action',
					description:
						'Years after a plague kills most of humanity and transforms the rest into monsters, the sole survivor in New York City struggles to find a cure',
					length: '1hr 41min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/iam-legend.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Mad Max Fury Road',
					genre: 'action',
					description:
						'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland',
					length: '2hrs',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/madmax.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Mission Impossible Rogue Nation',
					genre: 'action',
					description:
						'Ethan and his team take on their most impossible mission yet when they have to eradicate an international rogue organization',
					length: '2hrs 11min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/action/mission-Impossible-rogue-nation.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Bad Teacher',
					genre: 'comedy',
					description:
						'A lazy, incompetent middle school teacher who hates her job, her students, and her co-workers is forced to return to teaching',
					length: '1hr 32min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/comedy/bad-teacher.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Cloudy With A Chance Of Meatballs',
					genre: 'comedy',
					description:
						'A local scientist is often regarded as a failure until he invents a machine that can make food fall from the sky.',
					length: '1hr 30min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/comedy/cloudy-with-a-chance-of-meatballs.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Hangover',
					genre: 'comedy',
					description:
						'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.',
					length: '1hr 40min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/comedy/hangover.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Minions Rise of Gru',
					genre: 'comedy',
					description:
						"The untold story of one twelve-year-old's dream to become the world's greatest supervillain.",
					length: '',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/comedy/minions-rise-of-gru.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'Minions',
					genre: 'comedy',
					description:
						'Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.',
					length: '1hr 31min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/comedy/minions.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					title: 'The Internship',
					genre: 'comedy',
					description:
						'Two salesmen whose careers have been torpedoed by the digital age find their way into a coveted internship at Google',
					length: '1hr 59min',
					source:
						'https://sneakflix.s3-us-west-1.amazonaws.com/movies/comedy/theinternship.mov',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Movies', null, {});
	},
};
