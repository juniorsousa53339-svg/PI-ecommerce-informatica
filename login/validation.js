document.addEventListener('DOMContentLoaded', function () {

    console.log("JS carregado!"); // vê se apareceu no console

    const form = document.querySelector('form');
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // impede recarregar a página

        console.log("Botão clicado!");

        const usuarioValido = "admin";
        const senhaValida = "1234";

        const usuarioDigitado = usernameInput.value.trim();
        const senhaDigitada = passwordInput.value.trim();

        console.log("Usuário digitado:", usuarioDigitado);
        console.log("Senha digitada:", senhaDigitada);

        if (usuarioDigitado === usuarioValido && senhaDigitada === senhaValida) {
            alert("Seja bem-vindo!");
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });

});