let produtos = [
   
];

let bancoImagens = {
    Computadores: [
        "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600",
        "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600"
    ],
    Notebooks: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600",
        "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600"
    ],
    Monitores: [
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600",
        "https://images.unsplash.com/photo-1551645120-d70bfe84c826?w=600"
    ],
    "Periféricos": [
        "https://images.unsplash.com/photo-1595225476474-87563907a212?w=600",
        "https://images.unsplash.com/photo-1527814050087-3793815479bd?w=600"
    ],
    Componentes: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
        "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600"
    ]
};

let produtoParaExcluir = 0;

function formatarPreco(valor) {
    return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderizarTabela() {
    let tabela = document.getElementById("tabelaProdutos");
    let html = "";

    for (let i = 0; i < produtos.length; i++) {
        let produto = produtos[i];

        html +=
            "<tr>" +
            '<td class="td-img"><img src="' + produto.imagem + '" alt="' + produto.nome + '"></td>' +
            "<td><strong>" + produto.nome + "</strong></td>" +
            '<td><span style="color: var(--text-secondary);">' + produto.tipo + "</span></td>" +
            '<td class="td-price">' + formatarPreco(produto.preco) + "</td>" +
            "<td>" +
            '<button class="btn-icon edit" onclick="abrirModalForm(' + produto.id + ')" title="Editar">' +
            '<i class="fa-solid fa-pen-to-square"></i></button>' +
            '<button class="btn-icon delete" onclick="abrirModalDelete(' + produto.id + ')" title="Excluir">' +
            '<i class="fa-solid fa-trash-can"></i></button>' +
            "</td>" +
            "</tr>";
    }

    tabela.innerHTML = html;
}

function fecharModais() {
    document.getElementById("modalForm").classList.remove("active");
    document.getElementById("modalDelete").classList.remove("active");
}

function abrirModalForm(id) {
    document.getElementById("produtoId").value = "";
    document.getElementById("produtoNome").value = "";
    document.getElementById("produtoPreco").value = "";
    document.getElementById("produtoDesc").value = "";
    document.getElementById("produtoTipo").value = "Computadores";
    document.getElementById("modalTitle").innerText = "Novo Produto";

    if (id) {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id === id) {
                document.getElementById("modalTitle").innerText = "Editar Produto";
                document.getElementById("produtoId").value = produtos[i].id;
                document.getElementById("produtoNome").value = produtos[i].nome;
                document.getElementById("produtoTipo").value = produtos[i].tipo;
                document.getElementById("produtoPreco").value = produtos[i].preco;
                document.getElementById("produtoDesc").value = produtos[i].descricao;
                document.getElementById("produtoImgUrl").value = produtos[i].imagem;
                document.getElementById("imgPreview").src = produtos[i].imagem;
            }
        }
    } else {
        atualizarImagemPreview();
    }

    document.getElementById("modalForm").classList.add("active");
}

function abrirModalDelete(id) {
    produtoParaExcluir = id;
    document.getElementById("modalDelete").classList.add("active");
}

function atualizarImagemPreview() {
    let id = document.getElementById("produtoId").value;

    if (id === "") {
        let tipo = document.getElementById("produtoTipo").value;
        let imagens = bancoImagens[tipo];
        let numero = Math.floor(Math.random() * imagens.length);

        document.getElementById("imgPreview").src = imagens[numero];
        document.getElementById("produtoImgUrl").value = imagens[numero];
    }
}

function salvarProduto() {
    let id = document.getElementById("produtoId").value;
    let nome = document.getElementById("produtoNome").value;
    let tipo = document.getElementById("produtoTipo").value;
    let preco = parseFloat(document.getElementById("produtoPreco").value);
    let descricao = document.getElementById("produtoDesc").value;
    let imagem = document.getElementById("produtoImgUrl").value;

    if (nome === "" || !preco) {
        alert("Preencha o nome e o preço do produto!");
        return;
    }

    if (id === "") {
        let novoId = 1;

        if (produtos.length > 0) {
            novoId = produtos[produtos.length - 1].id + 1;
        }

        produtos.push({
            id: novoId,
            nome: nome,
            tipo: tipo,
            descricao: descricao,
            preco: preco,
            imagem: imagem
        });
    } else {
        for (let i = 0; i < produtos.length; i++) {
            if (produtos[i].id == id) {
                produtos[i].nome = nome;
                produtos[i].tipo = tipo;
                produtos[i].descricao = descricao;
                produtos[i].preco = preco;
                produtos[i].imagem = imagem;
            }
        }
    }

    fecharModais();
    renderizarTabela();
}

function confirmarExclusao() {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === produtoParaExcluir) {
            produtos.splice(i, 1);
            break;
        }
    }

    produtoParaExcluir = 0;
    fecharModais();
    renderizarTabela();
}

document.addEventListener("DOMContentLoaded", function () {
    let usuario = pegarUsuario();

    if (usuario.admin === false) {
        window.location.href = "../index.html?page=produtos";
        return;
    }

    atualizarAreaLogin("admin-status", "../login/login.html");
    renderizarTabela();
});

function logoutSimples() {
    sair();
    window.location.href = "../index.html?page=login";
}
