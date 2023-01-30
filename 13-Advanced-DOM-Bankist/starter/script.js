'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav')


const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};


btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


// const allButtons = document.getElementsByTagName('button')

// console.log(allButtons);

const cookie_message = document.createElement('div')

cookie_message.classList.add('cookie-message')
cookie_message.innerHTML = `This website uses cookies <button class="btn btn-close-cookie">Okay</button>`

cookie_message.style.backgroundColor = 'rgb(0,0,0)'
cookie_message.style.width = '100vw'

document.querySelector('.header').append(cookie_message)  // Add as a child
// document.querySelector('.header').prepend(cookie_message)  // Add as a child
// document.querySelector('.header').after(cookie_message)  // Adds as a sibling
// document.querySelector('.header').before(cookie_message)  // Adds as a sibling

document.querySelector('.btn-close-cookie').addEventListener('click', () => {
  cookie_message.remove()
})

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', e => {
  const section1Coords = section1.getBoundingClientRect()
  console.log('window.pageXOffset:', window.pageXOffset)
  console.log('window.pageYOffset:', window.pageYOffset)
  console.log('window.scrollX:', window.scrollX);
  console.log('window.scrollY:', window.scrollY);
  console.log('window.pageYOffset + section1Coords.top:', window.pageYOffset + section1Coords.top)
  console.log('window.scrollY + section1Coords.top:', window.scrollY + section1Coords.top)

  // window.scrollTo({
  //   left: window.pageXOffset + section1Coords.left,
  //   top: window.scrollY + section1Coords.top,
  //   behavior: "smooth"
  // })

  section1.scrollIntoView({ behavior: "smooth" })
})

// document.querySelectorAll('.nav__link').forEach(el => el.addEventListener('click', e => {
//   e.preventDefault()
//   console.log(el);
//   console.log(this);
//   const id = el.getAttribute('href')
// }))


// Event Delegation - attaching one event to parent rather than multiple repeated events for every element

document.querySelector('.nav__links').addEventListener('click', e => {
  e.preventDefault()
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: "smooth" })
  }
})

// Tabbed element

const tabContainer = document.querySelector('.operations__tab-container')
const tabs = document.querySelectorAll('.operations__tab')
const tabContents = document.querySelectorAll('.operations__content')

tabContainer.addEventListener('click', e => {
  const tab = e.target.closest('button');

  if (!tab) return

  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  tab.classList.add('operations__tab--active')

  tabContents
    .forEach(t => t.classList.remove('operations__content--active'))
  document
    .querySelector(`.operations__content--${tab.dataset.tab}`)
    .classList.add('operations__content--active')
})

// Fade out the rest on hover

const handleHover = function (e) {
  if (!e.target.classList.contains('nav__link')) return

  const link = e.target
  const siblings = link.closest('.nav').querySelectorAll('.nav__link')
  const logo = link.closest(`.nav`).querySelector('img')

  siblings.forEach(el => {
    if (el !== link) {
      el.style.opacity = this
    }
  })

  logo.style.opacity = this
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// container.addEventListener('mouseover', e => {
//   if (!e.target.classList.contains('nav__link')) return

//   const link = e.target
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link')
//   const logo = link.closest(`.nav`).querySelector('img')

//   siblings.forEach(el => {
//     if (el !== link) {
//       el.style.opacity = 0.5
//     }
//   })

//   logo.style.opacity = 0.5
// })
// container.addEventListener('mouseout', e => {
//   if (!e.target.classList.contains('nav__link')) return

//   const link = e.target
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link')
//   const logo = link.closest(`.nav`).querySelector('img')

//   siblings.forEach(el => el.style.opacity = 1)

//   logo.style.opacity = 1
// })
// 

// Sticky navbar

// const navHeight = section1.getBoundingClientRect().y

// const headerFixed = e => {
//   (window.scrollY > navHeight)
//     ? nav.classList.add('sticky')
//     : nav.classList.remove('sticky')

//   // if (window.scrollY > height) {
//   //   nav.classList.add('sticky')
//   // } else {
//   //   nav.classList.remove('sticky')
//   // }
// }

// window.addEventListener('scroll', headerFixed)

const header = document.querySelector('.header')
const height = nav.getBoundingClientRect().height

const stickyNavObserver = entries => {
  const [entry] = entries

  !entry.isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver
  (stickyNavObserver, {
    root: null,
    threshold: 0,
    rootMargin: `-${height}px`
  }
  )

headerObserver.observe(header)


// Reveal sections

const sections = document.querySelectorAll('.section')

const sectionReveal = (entries, observer) => {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(
  sectionReveal, {
  root: null,
  threshold: 0.1
}
)

sections.forEach(s => {
  // s.classList.add('section--hidden')
  sectionObserver.observe(s)
})

// Lazy loading images

const lazyImages = document.querySelectorAll('img[data-src')

const lazyLoad = (entries, obsever) => {
  const [entry] = entries

  if (!entry.isIntersecting) return

  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load', e => {
    entry.target.classList.remove('lazy-img')
  })
}

const lazyImgObserver = new IntersectionObserver(lazyLoad, {
  root: null,
  threshold: 0.25,
  rootMargin: '200px'
})

lazyImages.forEach(img => lazyImgObserver.observe(img))

// Slider

const dotsDiv = document.querySelector('.dots')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0
const lastSlide = slides.length - 1


slides.forEach((slide, i) => {
  let dot = document.createElement('button')

  dot.classList.add('dots__dot')
  dot.dataset.slide = i

  dotsDiv.appendChild(dot)
})

const updateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(d => {
    d.classList.remove('dots__dot--active')
  })
  let btn = document.querySelector(`[data-slide="${slide}"]`)
  btn.classList.add('dots__dot--active')
}

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translate(${100 * (i - slide)}%)`
  })
  updateDot(slide)
}

document.querySelectorAll('.slider__btn').forEach(btn => btn.addEventListener('click', e => {
  if (e.target.classList.contains('slider__btn--left')) {
    if (currentSlide == 0) currentSlide = lastSlide
    else currentSlide--
  }

  else if (e.target.classList.contains('slider__btn--right')) {
    if (currentSlide === lastSlide) currentSlide = 0
    else currentSlide++
  }

  goToSlide(currentSlide)
}))

dotsDiv.addEventListener('click', e => {
  e.preventDefault()
  if (!e.target.classList.contains('dots__dot')) return

  currentSlide = e.target.dataset.slide

  goToSlide(currentSlide)
})

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') {
    if (currentSlide == 0) currentSlide = lastSlide
    else currentSlide--
  } else if (e.key === 'ArrowRight') {
    if (currentSlide === lastSlide) currentSlide = 0
    else currentSlide++
  }

  goToSlide(currentSlide)
})

goToSlide(currentSlide)
