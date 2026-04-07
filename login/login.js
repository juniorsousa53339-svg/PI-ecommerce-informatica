let form = document.getElementById("loginForm");
let mensagem = document.getElementById("loginMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("username").value;
    let senha = document.getElementById("password").value;
    let usuario = fazerLogin(nome, senha);

    if (usuario.logado === false) {
        mensagem.textContent = "Digite um nome de usuário.";
        mensagem.classList.remove("admin-success");
        return;
    }

    if (usuario.admin) {
        mensagem.textContent = "Login de administrador realizado.";
        mensagem.classList.add("admin-success");
        setTimeout(() => {
            if (window.parent !== window) {
                window.parent.refreshAuthUI();
                window.parent.setMainIframePage("gerenciarProdutos");
            } else {
                window.location.href = "../gerenciarProdutos/gerenciarProduto.html";
            }
        }, 1000);
    } else {
        mensagem.textContent = "Login realizado com sucesso.";
        mensagem.classList.remove("admin-success");
        setTimeout(() => {
            if (window.parent !== window) {
                window.parent.refreshAuthUI();
                window.parent.setMainIframePage("produtos");
            } else {
                window.location.href = "../produtos/produtos.html";
            }
        }, 1000);
    }
});
