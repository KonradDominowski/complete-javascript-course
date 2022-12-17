// Data 1

let Mark = {
  weight: 78,
  height: 1.69,
};

let John = {
  weight: 92,
  height: 1.95,
};

let markBMI = Mark.weight / Mark.height ** 2;
let johnBMI = John.weight / John.height ** 2;

console.log(markBMI);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;

console.log(markHigherBMI);

// Data 2

let Mark2 = {
  weight: 95,
  height: 1.88,
};

let John2 = {
  weight: 85,
  height: 1.76,
};

let mark2BMI = Mark2.weight / Mark2.height ** 2;
let john2BMI = John2.weight / John2.height ** 2;

console.log(mark2BMI);
console.log(john2BMI);

const mark2HigherBMI = mark2BMI > john2BMI;

console.log(mark2HigherBMI);
