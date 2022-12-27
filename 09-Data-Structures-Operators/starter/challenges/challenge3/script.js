const gameEvents = new Map([
	[17, '⚽ GOAL'],
	[36, '🔁 Substitution'],
	[47, '⚽ GOAL'],
	[61, '🔁 Substitution'],
	[64, '🔶 Yellow card'],
	[69, '🔴 Red card'],
	[70, '🔁 Substitution'],
	[72, '🔁 Substitution'],
	[76, '⚽ GOAL'],
	[80, '⚽ GOAL'],
	[92, '🔶 Yellow card'],
]);

{
	// EX 1
	let eventsSet = [...new Set(gameEvents.values())]

	console.log(eventsSet);
}

{
	// EX 2

	gameEvents.delete(64)
	console.log(gameEvents);
}

{
	// EX 3

	console.log(`An even happened, on average, every ${90 / gameEvents.size} minutes.`);
}

{
	// EX 4

	for (const [key, value] of gameEvents) {
		let half = (key < 45) ? '[FIRST HALF]' : '[SECOND HALF]'
		console.log(`${half} ${key}:  ${value}`);
	}
}