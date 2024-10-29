document.addEventListener('DOMContentLoaded', function () {
  const loadComponent = (selector, url) => {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        document.querySelector(selector).innerHTML = data
      })
      .catch((error) => console.error(`Erro ao carregar ${url}:`, error))
  }

  loadComponent('#header', '/src/components/header.html')
})
