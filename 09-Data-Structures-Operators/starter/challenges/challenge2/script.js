const game = {
	team1: 'Bayern Munich',
	team2: 'Borrussia Dortmund',
	players: [
		[
			'Neuer',
			'Pavard',
			'Martinez',
			'Alaba',
			'Davies',
			'Kimmich',
			'Goretzka',
			'Coman',
			'Muller',
			'Gnarby',
			'Lewandowski',
		],
		[
			'Burki',
			'Schulz',
			'Hummels',
			'Akanji',
			'Hakimi',
			'Weigl',
			'Witsel',
			'Hazard',
			'Brandt',
			'Sancho',
			'Gotze',
		],
	],
	score: '4:0',
	scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
		'Hummels'],
	date: 'Nov 9th, 2037',
	odds: {
		team1: 1.33,
		x: 3.25,
		team2: 6.5,
	},
};

{ // EX 1
	for (const [index, scorer] of game.scored.entries()) {
		console.log(`Goal ${index + 1} scored by ${scorer}.`);
	}
}

{ // EX 2
	// Method 1
	const odds = Object.values(game.odds);
	let avgOdd = (odds.reduce((average, odd) => average += odd) / odds.length).toFixed(2)

	// Method 2
	const odds2 = Object.values(game.odds);
	let oddsSum = 0
	for (const odd of odds2) {
		oddsSum += odd

	}
	let oddsAvg = (oddsSum / odds2.length).toFixed(2)

	console.log(avgOdd);
	console.log(oddsAvg);
}

{ // EX 3
	const teamOdds = Object.entries(game.odds)

	for (const [team, odd] of teamOdds) {
		console.log(`Odd of ${game[team] ? `victory ${game[team]}` : 'draw'}: ${odd}.`);
	}
}

{ // EX 4
	// Method 1

	let scorers = {}

	for (const scorer of game.scored) {
		scorers[scorer] &&= scorers[scorer] + 1  // Only add 1 if it exists
		scorers[scorer] ||= 1  // Only sets the value to 1 if it doesn't exist

	}
	console.log(scorers);

	// Method 2

	let scorers2 = {}

	for (const scorer of game.scored) {
		scorers2[scorer] ? scorers2[scorer]++ : scorers2[scorer] = 1
	}
	console.log(scorers2);

	// Method 3

	const scorersSet = [...new Set(game.scored)]
	let scorers3 = {}

	for (const scorer of scorersSet) {
		let goals = game.scored.reduce((sumOfGoals, player) => (player === scorer) ? sumOfGoals += 1 : sumOfGoals, 0)
		scorers3[scorer] = goals
	}

	console.log(scorers3);
}
