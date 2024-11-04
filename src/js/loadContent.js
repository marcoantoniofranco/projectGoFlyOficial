const loadComponent = (selector, url) => {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.querySelector(selector).innerHTML = data
    })
    .catch((error) => console.error(`Erro ao carregar ${url}:`, error))
}

document.addEventListener('DOMContentLoaded', function () {
  loadComponent('#header', '/src/components/header.html')
  loadComponent('#pricing__plans', '/src/components/pricingPlans.html')
})
