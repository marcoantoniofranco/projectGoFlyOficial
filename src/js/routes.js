const routes = {
  '/': '/src/components/home.html',
  '/pacotes': '/src/components/pricingPlans.html',
  '/sobre': '/src/components/about.html',
  '/destino': '/src/components/carousel.html',
}

async function loadPage(path) {
  try {
    const template = routes[path] || routes['/']
    const response = await fetch(template)
    const html = await response.text()

    const main = document.querySelector('main')
    main.innerHTML = html

    const header = document.querySelector('.header')
    switch (path) {
      case '/pacotes':
        document.body.style.backgroundColor = '#fff'
        header.classList.remove('with-background')
        header.classList.add('dark-text')
        break
      case '/':
        document.body.style.backgroundColor = '#04373b'
        header.classList.add('with-background')
        header.classList.remove('dark-text')
        break
      case '/sobre':
        document.body.style.backgroundColor = '#04373b'
        header.classList.remove('with-background')
        header.classList.remove('dark-text')
        break

      case '/destino':
        document.body.style.backgroundColor = '#04373b'
        header.classList.remove('with-background')
        header.classList.remove('dark-text')
        break
    }
  } catch (error) {
    console.error('Erro ao carregar a página:', error)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPage(window.location.pathname)

  document.addEventListener('click', (e) => {
    if (e.target.matches('a')) {
      e.preventDefault()
      const path = e.target.getAttribute('href')
      history.pushState({}, '', path)
      loadPage(path)
    }
  })

  window.addEventListener('popstate', () => {
    loadPage(window.location.pathname)
  })
})
