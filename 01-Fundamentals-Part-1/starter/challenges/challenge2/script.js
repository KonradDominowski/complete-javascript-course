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

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI === true) {
    console.log(`Mark BMI (${markBMI.toFixed(1)}) is higher tham John's (${johnBMI.toFixed(1)})!`);
} else {
    console.log(`Mark BMI (${markBMI.toFixed(1)}) is lower tham John's (${johnBMI.toFixed(1)})!`);
}
