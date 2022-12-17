// Data 1

// const dolphinsScore1 = 44
// const dolphinsScore2 = 23
// const dolphinsScore3 = 73

// const koalasScore1 = 65
// const koalasScore2 = 54
// const koalasScore3 = 49

// Data 2

const dolphinsScore1 = 85
const dolphinsScore2 = 54
const dolphinsScore3 = 54

const koalasScore1 = 23
const koalasScore2 = 34
const koalasScore3 = 27

const averageScore = (score1, score2, score3) => ((score1, score2, score3) / 3).toFixed(2)

const dolphinsAverage = averageScore(dolphinsScore1, dolphinsScore2, dolphinsScore3)
const koalasAverage = averageScore(koalasScore1, koalasScore2, koalasScore3)

const checkWinner = (dolphinsScore, koalasScore) => {
    if (dolphinsScore >= 2 * koalasScore) {
        return `Dolphins win! (${dolphinsScore} - ${koalasScore})`
    } else if (koalasScore >= 2 * dolphinsScore) {
        return `Koalas win! (${dolphinsScore} - ${koalasScore})`
    } else {
        return `Nobody wins (Doplhins ${dolphinsScore} - ${koalasScore} Koalas)`
    }
}

console.log(checkWinner(dolphinsAverage, koalasAverage));  
