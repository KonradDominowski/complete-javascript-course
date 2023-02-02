'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


// Map method

const eurToUSD = 1.1

const movementsUSD = movements.map(cur => cur * eurToUSD)

const movementsDescriptions = movements.map((mov, i) =>
  `Movement ${i + 1}: You ${mov > 0 ? `deposited` : `withdrew`} ${Math.abs(mov)}.`
)

// Usernames

const createUsernames = function (arr) {
  arr.forEach((acc) => {
    acc.username ||= acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('')
  })
}

createUsernames(accounts)

// console.log(accounts);

// Filter method

const deposits = movements.filter(mov => mov > 0)
const withdrawals = movements.filter(mov => mov < 0)

// console.log(deposits);
// console.log(withdrawals);

// Reduce method

const totalBalance = movements.reduce((sum, mov) => sum + mov)

// console.log(totalBalance);

// Maximum value

const maximumMovement = movements.reduce((max, mov) => (mov > max) ? mov : max)

const minimumMovement = movements.reduce((min, mov) => (mov < min) ? mov : min)

// console.log(maximumMovement);
// console.log(minimumMovement);

// Some method 

let deposit = movements.some(mov => mov >= 3000)

// console.log(deposit);

// New array

const hundredDices = Array.from({ length: 100 }, (cur, i) => Math.floor(Math.random() * 6 + 1))

console.log(hundredDices.reduce((avg, el) => avg + el) / hundredDices.length);

console.log(hundredDices);

/////////////////////////////////////////////////

let currentAccount;
let sorted = false

const displayMovements = function (acc, sort = false) {
  // Empty container before adding displaying movements
  containerMovements.innerHTML = ''

  console.log(sort);
  let movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements

  console.log(movs);

  // Create a new HTML (not element) for each movement, and then display it
  movs.forEach(function (mov, i) {
    const operationType = (mov > 0) ? `deposit` : `withdrawal`

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${operationType}">${i + 1} ${operationType}</div>
      <div class="movements__value">${mov} €</div>
    </div>`;

    // Add movement to the movement container 
    containerMovements.insertAdjacentHTML('afterbegin', html)
  })
}

const displayBalance = function (acc) {
  // Sum all movements
  acc.balance = acc.movements.reduce((sum, mov) => sum + mov)

  // Display balance
  labelBalance.textContent = `${acc.balance} €`
}

const displayDepositsWithdrawalsInterest = function (acc) {
  let sumOfDeposits = acc.movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov)

  labelSumIn.textContent = `${sumOfDeposits} €`

  let sumOfWithdrawals = Math.abs(acc.movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov))

  labelSumOut.textContent = `${sumOfWithdrawals} €`

  let interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => mov * acc.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((sum, mov) => sum + mov)

  labelSumInterest.textContent = `${interest} €`
}

// const displayWithdrawals = function (movements) {
//   let sumOfWithdrawals = Math.abs(movements
//     .filter(mov => mov < 0)
//     .reduce((sum, mov) => sum + mov))

//   labelSumOut.textContent = `${sumOfWithdrawals} €`
// }

// const displayInterest = function (account) {
//   const interest = account.movements
//     .filter(mov => mov > 0)
//     .map(mov => mov * account.interestRate / 100)
//     .filter(int => int >= 1)
//     .reduce((sum, mov) => sum + mov)

//   labelSumInterest.textContent = `${interest} €`
// }


// Event Handlers

const updateUI = function (acc) {
  displayMovements(acc);
  displayBalance(acc);
  displayDepositsWithdrawalsInterest(acc);

  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur()
  inputTransferTo.blur()

  inputLoginUsername.value = inputLoginPin.value = '';
  inputLoginUsername.blur();
  inputLoginPin.blur();

  inputLoanAmount.value = ''
  inputLoanAmount.blur()
}

const logOut = function () {
  containerApp.style.opacity = 0
  currentAccount = undefined
  labelWelcome.textContent = 'Login to get started'
}

btnLogin.addEventListener('click', e => {

  //Prevent page reload after submitting form
  e.preventDefault()

  let acc = accounts.find(acc => acc.username === inputLoginUsername.value)

  // Optional chaining - it goes further only if acc is not undefined
  if (acc?.pin === Number(inputLoginPin.value)) {

    containerApp.style.opacity = 1
    currentAccount = acc
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`

    updateUI(currentAccount);

  } else {
    logOut()
  }
})

btnTransfer.addEventListener('click', e => {
  e.preventDefault()

  const amount = Number(inputTransferAmount.value)
  const transferTo = inputTransferTo.value
  let receipient = accounts.find(el => el.username === transferTo)

  if (
    !isNaN(amount) &&
    receipient &&
    receipient !== currentAccount &&
    amount <= currentAccount.balance
  ) {
    currentAccount.movements.push(-amount)
    receipient.movements.push(amount)

  }

  updateUI(currentAccount);
})

btnClose.addEventListener('click', e => {
  e.preventDefault()

  let username = inputCloseUsername.value
  let pin = Number(inputClosePin.value)

  if (
    username === currentAccount.username &&
    pin === currentAccount.pin
  ) {
    accounts.splice(accounts.findIndex(acc =>
      acc.username === currentAccount.username), 1)
    logOut();

  }

})

btnLoan.addEventListener('click', e => {
  e.preventDefault()

  const amount = Number(inputLoanAmount.value)

  if (amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    console.log();
    currentAccount.movements.push(amount)
    updateUI(currentAccount)
  }
})

btnSort.addEventListener('click', e => {
  e.preventDefault()

  sorted = !sorted
  displayMovements(currentAccount, sorted)
})