'use strict';
const score0Element = document.querySelector('#score--0')
const score1Element = document.querySelector('#score--1')
const dice = document.querySelector('.dice')
const btnRollDice = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const btnNew = document.querySelector('.btn--new')
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
let player0CurrentScore = player0.querySelector('.current-score')
let player1CurrentScore = player1.querySelector('.current-score')

let scores = [0, 0]
let activePlayer = 0
let playing = false

const gameReset = function () {
	playing = true
	scores = [0, 0]
	activePlayer = 0
	score0Element.textContent = scores[0]
	score1Element.textContent = scores[1]
	player0CurrentScore.textContent = 0
	player1CurrentScore.textContent = 0
	player0.classList.add('player--active')
	player1.classList.remove('player--active')
	dice.classList.add('hidden')
	if (document.querySelector('.player--winner')) {
		document.querySelector('.player--winner').classList.remove('player--winner')
	}
}

const changePlayer = function () {
	currentScore = 0
	document.querySelector(`#current--${activePlayer}`).textContent = currentScore
	activePlayer = activePlayer === 0 ? 1 : 0
	player0.classList.toggle('player--active')
	player1.classList.toggle('player--active')
}

gameReset()

let currentScore = 0
btnRollDice.addEventListener('click', () => {
	if (!playing) return

	// Generate rolled number
	let diceroll = Math.trunc(Math.random() * 6) + 1

	// Display dice with number
	dice.classList.remove('hidden')
	dice.src = `dice-${diceroll}.png`

	// Add score to current score of active player
	if (diceroll !== 1) {
		currentScore += diceroll
		document.querySelector(`#current--${activePlayer}`).textContent = currentScore

	} else {
		// Switch to another player and reset current score when 1 is rolled
		changePlayer()
	}
})

btnHold.addEventListener('click', () => {
	if (!playing) return

	// Hold the current score
	scores[activePlayer] += currentScore
	document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer]

	// End the game if player reached score of 100
	if (scores[activePlayer] >= 100) {
		document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
		playing = false

	} else {
		changePlayer()
	}
})

btnNew.addEventListener('click', gameReset)