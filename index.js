let iframe = document.getElementById("conteudo-principal");
let links = document.querySelectorAll(".nav-links a");
let pagina = new URLSearchParams(window.location.search).get("page");

function marcarLinkAtivo(nomePagina) {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");

        if (links[i].dataset.page === nomePagina) {
            links[i].classList.add("active");
        }
    }
}

function refreshAuthUI() {
    atualizarAreaLogin("admin-status", "login/login.html", "conteudo-principal");
}

function setMainIframePage(nomePagina) {
    if (nomePagina === "produtos") {
        iframe.src = "produtos/produtos.html";
        marcarLinkAtivo("produtos");
    } else if (nomePagina === "login") {
        iframe.src = "login/login.html";
    } else {
        iframe.src = "home/home.html";
        marcarLinkAtivo("home");
    }

    refreshAuthUI();
}

window.refreshAuthUI = refreshAuthUI;
window.setMainIframePage = setMainIframePage;

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        marcarLinkAtivo(this.dataset.page);
    });
}

refreshAuthUI();
setMainIframePage(pagina);
