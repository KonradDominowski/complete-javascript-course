document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btn = document.querySelector('button')
const textArea = document.querySelector('textarea')
let text = undefined

btn.textContent = 'Wyślij'
textArea.textContent = `underscore_case 
first_name
Some_Variable
calculate_AGE 
delayed_departure `

btn.addEventListener('click', () => {
	text = textArea.value
	let lines = text.split('\n')

	for (const [i, line] of lines.entries()) {
		let [first, second] = line.trim().toLowerCase().split('_')
		let output = `${first}${second.replace(second[0], second[0].toUpperCase())}`.padEnd(20)

		console.log(`${output}${'OK'.repeat(i + 1)}`);

	}
})