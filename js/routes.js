const routes = {
  '/': 'components/home.html',
  '/pacotes': 'components/pricingPlans.html',
  '/sobre': 'components/about.html',
  '/destino': 'components/carousel.html',
}

async function loadPage() {
  const path = window.location.hash.slice(1) || '/'
  const template = routes[path] || routes['/']
  try {
    const response = await fetch(template)
    const html = await response.text()

    const main = document.querySelector('main')
    main.innerHTML = html

    const header = document.querySelector('.header')
    switch (path) {
      case '/pacotes':
        document.body.className = 'pricing-page'
        header.classList.remove('with-background')
        header.classList.add('dark-text')
        break
      case '/':
        document.body.className = ''
        header.classList.add('with-background')
        header.classList.remove('dark-text')
        break
      default:
        document.body.className = ''
        header.classList.remove('with-background')
        header.classList.remove('dark-text')
        break
    }
  } catch (error) {
    console.error('Erro ao carregar a página:', error)
  }
}

window.addEventListener('hashchange', loadPage)
window.addEventListener('load', loadPage)
