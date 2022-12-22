'use strict';
const checkButton = document.querySelector('.check')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const score = document.querySelector('.score')
const highscore = document.querySelector('.highscore')
const title = document.querySelector('header').querySelector('h1')
const main = document.querySelector('main')
const body = document.querySelector('body')
const again = document.querySelector('.again')

const random20 = () => Math.trunc(Math.random() * 20) + 1
const decreaseScore = function () {
	currentScore = currentScore - 1
	score.textContent = currentScore

	if (currentScore === 0) {
		title.textContent = "YOU LOSE!"
		main.style.pointerEvents = 'none'
		main.style.opacity = 0.25
	}
}

let numberToGuess = random20()
let currentScore = 20
let currentHighscore = 0

console.log(numberToGuess);


checkButton.addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value)
	if (!guess) {
		message.textContent = 'No number!'
		decreaseScore()

	} else if (guess < 0 || guess > 20) {
		message.textContent = 'Enter a number between 1 and 20!'
		decreaseScore()

	} else if (guess < numberToGuess) {
		message.textContent = 'Too low!'
		decreaseScore()

	} else if (guess > numberToGuess) {
		message.textContent = 'Too high!'
		decreaseScore()

	} else if (guess === numberToGuess) {
		number.textContent = numberToGuess
		number.style.width = '30rem'
		body.style.backgroundColor = '#60b347'
		message.textContent = 'Correct!'
		if (currentScore > currentHighscore) {
			highscore.textContent = currentScore
		}
	}
})

again.addEventListener('click', function () {
	numberToGuess = random20()
	currentScore = 20
	title.textContent = 'Guess My Number!'
	main.style.pointerEvents = 'all'
	main.style.opacity = 1
	message.textContent = 'Start guessing...'
	score.textContent = currentScore
	body.style.backgroundColor = '#222'
	number.textContent = '?'
	number.style.width = '15rem'
	document.querySelector('.guess').value = ''
})