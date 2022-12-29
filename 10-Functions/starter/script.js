'use strict';


const greet = function (greeting = 'Hola') {
	return function (name = 'Konrad ') {
		console.log(`${greeting} ${name}`);
	}
}

const greeterHey = greet()
greeterHey('Konrad')
greeterHey('Angelika')

greet('hello')('Name')
greet()


const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hello')('Konrado')


const addTax = (rate, value) => value + value * rate

console.log(addTax(0.23, 150));

const addVAT = addTax.bind(null, 0.23)

console.log(addVAT(260));

const addVAT2 = rate => value => value + value * rate

console.log(addVAT2(0.25)(500));


const increment = function () {
	let counter = 0
	console.log(`increment is run`);

	return () => {
		counter++
		console.log(counter);
	}
};

const constant = increment()  // Funkcja increment jest zapisana do zmiennej constant, wykonuje się ona raz, a potem przy każdym kolejnym wywołaniu już się nie wykonuje, wykonuje się tylko funkcja którą zwraca, dlatego zmienna counter nie inicjalizuje się za każdym razem do zera

console.log(`constant`);

console.log(counter);

constant();
constant();
constant();

increment()();
increment()();
increment()();
