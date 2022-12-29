'use strict';

const poll = {
	question: "What is your favourite programming language?",
	options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
	// This generates [0, 0, 0, 0]. More in the next section! 
	answers: new Array(4).fill(0),

	registerNewAnswer() {
		// let string = `${this.question} \n`

		// for (const option of this.options) {
		// 	string += `${option}\n`
		// }

		let string = `${this.question}\n ${this.options.join('\n')}`

		while (true) {
			let answer = prompt(string)

			if (isNaN(answer)
				|| !(0 <= answer && answer <= this.answers.length - 1)
				|| !answer) {
				alert('Enter a number 0 to 3')
			} else {
				this.answers[answer]++
				this.displayResults('array')
				this.displayResults('string')
				break
			}
		}

	},

	displayResults(type = 'array', array = this.answers) {
		if (type === 'string') {
			// let result = `Poll result are `

			// for (const [i, res] of array.entries()) {
			// 	result += `${res}`
			// 	result += `${(i < array.length - 1) ? ', ' : '.'}`
			// }


			let result = `Poll result are ${array.join(', ')}.`

			console.log(result);

		} else if (type === 'array') {
			console.log(array);
		}
	}
};

// let data1 = [5, 2, 3]
// let data2 = [1, 5, 3, 9, 6, 1]

// poll.displayResults('string', data1)
// poll.displayResults('string', data2)

poll.displayResults.call({ answers: [5, 2, 3] })
poll.displayResults.call({ answers: [5, 2, 3] }, 'string')

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] })
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string')

const answerBtn = document.querySelector('.poll')

answerBtn.addEventListener('click', poll.registerNewAnswer.bind(poll))

