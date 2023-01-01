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

console.log(accounts);

// Filter method

const deposits = movements.filter(mov => mov > 0)
const withdrawals = movements.filter(mov => mov < 0)

console.log(deposits);
console.log(withdrawals);

// Reduce method

const totalBalance = movements.reduce((sum, mov) => sum + mov)

console.log(totalBalance);

// Maximum value

const maximumMovement = movements.reduce((max, mov) => (mov > max) ? mov : max)

const minimumMovement = movements.reduce((min, mov) => (mov < min) ? mov : min)

console.log(maximumMovement);
console.log(minimumMovement);


/////////////////////////////////////////////////

const displayMovements = function (movements) {
  // Empty container before adding displaying movements
  containerMovements.innerHTML = ''

  // Create a new HTML (not element) for each movement, and then display it
  movements.forEach(function (mov, i) {
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

const displayBalance = function (movements) {
  // Sum all movements
  let balance = movements.reduce((sum, mov) => sum + mov)

  // Display balance
  labelBalance.textContent = `${balance} €`
}

const displayDeposits = function (movements) {
  let sumOfDeposits = movements
    .filter(mov => mov > 0)
    .reduce((sum, mov) => sum + mov)

  labelSumIn.textContent = `${sumOfDeposits} €`
}

const displayWithdrawals = function (movements) {
  let sumOfWithdrawals = Math.abs(movements
    .filter(mov => mov < 0)
    .reduce((sum, mov) => sum + mov))

  labelSumOut.textContent = `${sumOfWithdrawals} €`
}

const displayInterest = function (account) {
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(mov => mov * account.interestRate / 100)
    .filter(int => int >= 1)
    .reduce((sum, mov) => sum + mov)

  labelSumInterest.textContent = `${interest} €`
}


// Event Handlers
let currentAccount;

btnLogin.addEventListener('click', e => {

  //Prevent page reload after submitting form
  e.preventDefault()

  let acc = accounts.find(acc => acc.username === inputLoginUsername.value)

  // Optional chaining - it goes further only if acc is not undefined
  if (acc?.pin === Number(inputLoginPin.value)) {

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();

    containerApp.style.opacity = 1
    currentAccount = acc
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`

    displayMovements(currentAccount.movements)
    displayBalance(currentAccount.movements)
    displayDeposits(currentAccount.movements)
    displayWithdrawals(currentAccount.movements)
    displayInterest(currentAccount)

  } else {
    containerApp.style.opacity = 0

    currentAccount = undefined
  }
})