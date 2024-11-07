const routes = {
  "/": "components/home.html",
  "/pacotes": "components/pricingPlans.html",
  "/sobre": "components/about.html",
  "/destino": "components/carousel.html",
};

async function loadPage(path) {
  try {
    const template = routes[path] || routes["/"];
    const response = await fetch(template);
    const html = await response.text();

    const main = document.querySelector("main");
    main.innerHTML = html;

    const header = document.querySelector(".header");
    switch (path) {
      case "/pacotes":
        document.body.style.backgroundColor = "#fff";
        header.classList.remove("with-background");
        header.classList.add("dark-text");
        break;
      case "/":
        document.body.style.backgroundColor = "#04373b";
        header.classList.add("with-background");
        header.classList.remove("dark-text");
        break;
      case "/sobre":
      case "/destino":
        document.body.style.backgroundColor = "#04373b";
        header.classList.remove("with-background");
        header.classList.remove("dark-text");
        break;
    }
  } catch (error) {
    console.error("Erro ao carregar a página:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Carregar a rota inicial
  const path = window.location.hash.replace("#", "") || "/";
  loadPage(path);

  // Intercepta os cliques em links
  document.addEventListener("click", (e) => {
    if (e.target.matches("a")) {
      e.preventDefault();
      const path = e.target.getAttribute("href");
      window.location.hash = path; // Atualiza a hash para mudar a URL
    }
  });

  // Carrega a página quando a hash muda (por exemplo, com o botão "voltar" do navegador)
  window.addEventListener("hashchange", () => {
    const path = window.location.hash.replace("#", "");
    loadPage(path);
  });
});
