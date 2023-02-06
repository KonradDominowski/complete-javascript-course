'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const url = 'https://restcountries.com/v3.1/'

///////////////////////////////////////

const renderCountry = function (countryData) {
	let newHTML = `
				<article class="country">
					<img class="country__img" src="${countryData.flags.svg}" />
					<div class="country__data">
						<h3 class="country__name">${countryData.name.common}</h3>
						<h4 class="country__region">${countryData.region}</h4>
						<p class="country__row"><span>👫</span>${countryData.population}</p>
						<p class="country__row"><span>🗣️</span>${Object.values(countryData.languages)[0]}</p>
						<p class="country__row"><span>💰</span>${Object.values(countryData.currencies)[0].name}</p>
					</div>
				</article>`

	countriesContainer.insertAdjacentHTML("beforeend", newHTML)
	countriesContainer.style.opacity = 1;

	countryData.borders.forEach(neighbourCode => getCountryDataFromCode(neighbourCode))
}

const renderNeighbour = function (countryData) {
	let newHTML = `
				<article class="country neighbour">
					<img class="country__img" src="${countryData.flags.svg}" />
					<div class="country__data">
						<h3 class="country__name">${countryData.name.common}</h3>
						<h4 class="country__region">${countryData.region}</h4>
						<p class="country__row"><span>👫</span>${countryData.population}</p>
						<p class="country__row"><span>🗣️</span>${Object.values(countryData.languages)[0]}</p>
						<p class="country__row"><span>💰</span>${Object.values(countryData.currencies)[0].name}</p>
					</div>
				</article>`

	countriesContainer.insertAdjacentHTML("beforeend", newHTML)

}

const getCountryDataFromCode = function (countryCode) {
	fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
		.then(res => res.json())
		.then(data => {
			let [countryData] = data
			renderNeighbour(countryData)
		})
}


const getCountrydata = function (country) {
	fetch(`https://restcountries.com/v3.1/name/${country}`)  // Zwraca mi obietnicę, z którą coś trzeba zrobić
		.then(res => res.json())  // Zamieniam uzyskane dane na jsona, które też są zwrócone w obietnicy
		.then(data => {
			let [countryData] = data

			console.log(countryData);
			renderCountry(countryData)
		})
}

getCountrydata('Poland')
