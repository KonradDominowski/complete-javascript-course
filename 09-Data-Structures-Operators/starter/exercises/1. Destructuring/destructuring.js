/**
Exercise 1

Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 1");

  let item = ["Egg", 0.25, 12];

  let name = item[0];
  let price = item[1];
  let quantity = item[2];

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log();
}

{
  console.log('SULOTION 1');

  let item = ["Egg", 0.25, 12];

  let [name, price, quantity] = item

  console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
  console.log('---------');
}

/**
Exercise 2

Rewrite the code below to assign each number to the right variable.
*/
{
  console.log("EXERCISE 2");

  let numbers = [3, 5, 4, 2, 6, 1];

  let [one, two, three, four, five, six] = numbers;

  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
  console.log();
}

{
  console.log('SOLUTION 2');

  let numbers = [3, 5, 4, 2, 6, 1];

  let [three, five, four, two, six, one] = numbers

  console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
  console.log('---------');
}

/**
Exercise 3

We have an object called 'user'.

Write the destructuring assignment that reads:

- 'name' property into the variable 'name'.
- 'years' property into the variable 'age'.
- 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
*/
{
  console.log("EXERCISE 3");

  let user = { name: "John", years: 30 };

  // your code to the left side:
  let { } = user;

  console.log(name); // John
  // console.log(age); // 30
  // console.log(isAdmin); // false
  console.log();
}

{
  console.log("SOLUTION 3");

  let user = { name: "John", years: 30 };

  let {
    name: name,
    years: age,
    isAdmin: isAdmin = false }
    = user;

  console.log(name); // John
  console.log(age); // 30
  console.log(isAdmin); // false
  console.log('---------');
}

/**
Exercise 4

Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
  console.log("EXERCISE 4");

  let person = [12, "Chris", "Owen"];

  let firstName = person[1];
  let lastName = person[2];
  let age = person[0];

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log();
}

{
  console.log("SOLUTION 4");

  let person = [12, "Chris", "Owen"];

  let [age, firstName, lastName] = person

  console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  console.log('---------');
}


/** 
Exercise 5

Rewrite the code below to use array destructuring instead of assigning each value to a variable.
Make sure not to have unused variables.

Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 5");

  let person = ["Chris", 12, "Owen"];

  let firstName = person[0];
  let lastName = person[2];

  console.log(`Name: ${firstName} ${lastName}`);
  console.log();
}

{
  console.log("SOLUTION 5");

  let person = ["Chris", 12, "Owen"];

  let [firstName, , lastName] = person

  console.log(`Name: ${firstName} ${lastName}`);
  console.log('---------');
}

/** 
Exercise 6

Using Array Destructuring get the last name from the array. 

Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 6");

  const students = ['Christina', 'Jon', 'Alexandare'];

  // Write your code here
  const [] = students;

  // console.log(lastName);
  console.log();
}

{
  console.log("SOLUTION 6");

  const students = ['Christina', 'Jon', 'Alexandare'];

  // Write your code here
  const [, , lastName] = students;

  console.log(lastName);
  console.log('---------');
}

/**
Exercise 7

Using Array Destructuring get all of the names from this Nested Array

Hint: https://untangled.io/in-depth-es6-destructuring-with-assembled-avengers
*/
{
  console.log("EXERCISE 7");

  const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
  ];

  // Write your code here
  const [] = moreStudents;

  // console.log(student1, student2, student3, student4, student5);
  console.log();
}

{
  console.log("EXERCISE 7");

  const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
  ];

  const [student1, [student2, student3], [student4, student5]] = moreStudents;

  console.log(student1, student2, student3, student4, student5);
  console.log('---------');
}

let arr = [1, 2, 3]

arr.toString