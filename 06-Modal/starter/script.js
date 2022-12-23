'use strict';
const modalBtns = document.querySelectorAll('.show-modal')
const modal = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.close-modal')
const openModalBtn = document.querySelector('show-modal')
const overlay = document.querySelector('.overlay')


const closeModal = () => {
	modal.classList.add('hidden');
	overlay.classList.add('hidden');
}

const openModal = () => {
	modal.classList.remove('hidden')
	overlay.classList.remove('hidden')
}

for (const btn of modalBtns) btn.addEventListener('click', openModal)

closeModalBtn.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', event => {
	if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
		closeModal()
	}
}
)