const carousel = document.querySelector('.carrousel')
const indicators = document.querySelectorAll('.indicator')
const cards = document.querySelectorAll('.card')

function updateCarousel(index) {
  const newOrder = [...cards].map((_, i) => cards[(i + index) % cards.length])

  carousel.innerHTML = ''
  newOrder.forEach((card) => {
    carousel.appendChild(card)
  })

  indicators.forEach((indicator) => indicator.classList.remove('active'))
  indicators[index].classList.add('active')
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    updateCarousel(index)
  })
})

indicators[0].classList.add('active')
