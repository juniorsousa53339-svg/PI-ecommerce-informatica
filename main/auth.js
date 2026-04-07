const CHAVE_LOGIN = "techstoreLogin";

function pegarUsuario() {
    let usuario = localStorage.getItem(CHAVE_LOGIN);

    if (usuario == null) {
        return { nome: "", logado: false, admin: false };
    }

    return JSON.parse(usuario);
}

function fazerLogin(nome, senha) {
    let usuario = {
        nome: nome.trim(),
        logado: false,
        admin: false
    };

    if (usuario.nome !== "") {
        usuario.logado = true;
    }

    if (usuario.nome.toLowerCase() === "admin" && senha === "1234") {
        usuario.admin = true;
    }

    localStorage.setItem(CHAVE_LOGIN, JSON.stringify(usuario));
    return usuario;
}

function sair() {
    localStorage.removeItem(CHAVE_LOGIN);
}

function atualizarAreaLogin(idArea, linkLogin, target) {
    let area = document.getElementById(idArea);
    let usuario = pegarUsuario();

    if (!area) {
        return;
    }

    if (usuario.logado) {
        area.innerHTML =
            '<div class="auth-user">' +
            '<i class="fa-solid fa-user"></i>' +
            "<span>" + usuario.nome + "</span>" +
            "</div>" +
            '<button type="button" class="logout-button" onclick="logoutSimples()">Sair</button>';
    } else {
        if (target) {
            area.innerHTML =
                '<a href="' + linkLogin + '" class="login-link" target="' + target + '">' +
                '<i class="fa-solid fa-user"></i>' +
                "<span>Login</span>" +
                "</a>";
        } else {
            area.innerHTML =
                '<a href="' + linkLogin + '" class="login-link">' +
                '<i class="fa-solid fa-user"></i>' +
                "<span>Login</span>" +
                "</a>";
        }
    }
}

function logoutSimples() {
    sair();
}
