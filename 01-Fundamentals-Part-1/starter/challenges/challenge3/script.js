// Data 1

// const dolphinsScore1 = 96
// const dolphinsScore3 = 89
// const dolphinsScore2 = 108

// const koalasScore1 = 88
// const koalasScore2 = 91
// const koalasScore3 = 110

// Bonus Data 1

// const dolphinsScore1 = 97
// const dolphinsScore3 = 112
// const dolphinsScore2 = 101

// const koalasScore1 = 109
// const koalasScore2 = 95
// const koalasScore3 = 123

// Bonus Data 2

const dolphinsScore1 = 97
const dolphinsScore3 = 112
const dolphinsScore2 = 101

const koalasScore1 = 109
const koalasScore2 = 95
const koalasScore3 = 106


const dolphinsAverageScore = ((dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3).toFixed(1)
const koalasAverageScore = ((koalasScore1 + koalasScore2 + koalasScore3) / 3).toFixed(1)


if (dolphinsAverageScore === koalasAverageScore) {
    console.log(`There is a tie!`);
} else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore > 100) {
    console.log(`Dolphins won with ${dolphinsAverageScore} points against Koalas' ${koalasAverageScore} points`);
} else if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore < 100) {
    console.log(`Dolphins got more points (${dolphinsAverageScore}) but not the required 100 to win.`);
} else if (dolphinsAverageScore < koalasAverageScore && koalasAverageScore > 100) {
    console.log(`Koalas won with ${koalasAverageScore} points against Dolphin's ${dolphinsAverageScore} points`);
} else {
    console.log(`Koalas got more points (${koalasAverageScore}) but not the required 100 to win.`);
}

