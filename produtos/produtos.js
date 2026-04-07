const produtos = [
    {
        id: 1,
        nome: "PC Gamer RTX 4070",
        descricao: "PC gamer de alta performance com RTX 4070 para jogos em 4K e trabalhos profissionais.",
        preco: 8999.99,
        imagem: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        disponivel: true
    },
    {
        id: 2,
        nome: "Notebook Dell XPS 15",
        descricao: "Notebook premium para profissionais criativos com tela 4K e performance excepcional.",
        preco: 12499.99,
        imagem: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        disponivel: true
    },
    {
        id: 3,
        nome: "Teclado Mecânico RGB K95",
        descricao: "Teclado mecânico premium com switches Cherry MX e iluminação RGB personalizável.",
        preco: 899.99,
        imagem: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 4,
        nome: "Mouse Gamer Pro X",
        descricao: "Mouse gamer de alta precisão com sensor óptico de 25.600 DPI e design ergonômico.",
        preco: 449.99,
        imagem: "https://images.unsplash.com/photo-1527814050087-3793815479bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 5,
        nome: "Monitor Ultrawide 34\"",
        descricao: "Monitor ultrawide curvo 34\" com 144Hz para máxima imersão em jogos e produtividade.",
        preco: 3299.99,
        imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 6,
        nome: "Headset Gamer 7.1",
        descricao: "Headset gamer com som surround 7.1 virtual e microfone com cancelamento de ruído.",
        preco: 599.99,
        imagem: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 7,
        nome: "PC Office i5",
        descricao: "PC ideal para escritório e trabalho, com ótimo custo-benefício.",
        preco: 3499.99,
        imagem: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 8,
        nome: "Notebook Gamer Legion",
        descricao: "Notebook gamer potente com RTX 4060 para jogos AAA em alta qualidade.",
        preco: 6999.99,
        imagem: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 9,
        nome: "Monitor Gamer 27\" 240Hz",
        descricao: "Monitor gamer competitivo com 240Hz para máxima fluidez em jogos.",
        preco: 2199.99,
        imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
        disponivel: false,
        selo: "Esgotado"
    },
    {
        id: 10,
        nome: "Webcam 4K Pro",
        descricao: "Webcam profissional 4K com foco automático e correção de luz.",
        preco: 799.99,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 11,
        nome: "SSD NVMe 2TB",
        descricao: "SSD NVMe Gen4 ultra-rápido com 2TB de capacidade.",
        preco: 899.99,
        imagem: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    },
    {
        id: 12,
        nome: "Cadeira Gamer Pro",
        descricao: "Cadeira gamer ergonômica premium com suporte lombar e reclinável.",
        preco: 1899.99,
        imagem: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=900&q=80",
        disponivel: true
    }
];

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderizarProdutos() {
    let grid = document.getElementById("productGrid");
    let contador = document.querySelector(".results-count");
    let html = "";

    contador.textContent = produtos.length + " produto(s) encontrado(s)";

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];
        let selo = "";
        let botao = '<button class="btn-buy"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>';

        if (produto.selo) {
            selo = '<span class="product-badge">' + produto.selo + "</span>";
        }

        if (produto.disponivel === false) {
            botao = '<button class="btn-buy disabled" disabled><i class="fa-solid fa-cart-shopping"></i> Comprar</button>';
        }

        html +=
            '<div class="product-card">' +
            '<div class="product-image-wrapper">' +
            '<img src="' + produto.imagem + '" alt="' + produto.nome + '" class="product-image">' +
            selo +
            "</div>" +
            '<div class="product-info">' +
            '<h3 class="product-title">' + produto.nome + "</h3>" +
            '<p class="product-desc">' + produto.descricao + "</p>" +
            '<div class="product-footer">' +
            '<span class="product-price">' + formatarPreco(produto.preco) + "</span>" +
            botao +
            "</div>" +
            "</div>" +
            "</div>";
    }

    grid.innerHTML = html;
}

function controlarAcessoAdmin() {
    let botaoGerenciar = document.getElementById("btnGerenciarProdutos");
    let usuario = pegarUsuario();

    if (usuario.admin) {
        botaoGerenciar.classList.remove("hidden");
    } else {
        botaoGerenciar.classList.add("hidden");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    controlarAcessoAdmin();
    renderizarProdutos();
});
