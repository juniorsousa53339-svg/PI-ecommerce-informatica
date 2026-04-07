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
    } else {
        mensagem.textContent = "Login realizado com sucesso.";
        mensagem.classList.remove("admin-success");
    }

    if (window.parent !== window) {
        window.parent.refreshAuthUI();
        window.parent.setMainIframePage("produtos");
    } else {
        window.location.href = "../produtos/produtos.html";
    }
});
