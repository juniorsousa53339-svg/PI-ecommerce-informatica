document.addEventListener("DOMContentLoaded", function () {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.querySelector(".cart-items");
    const rows = document.querySelectorAll(".summary-row strong");

    function renderizar() {
        let html = "";
        for (let i = 0; i < carrinho.length; i++) {
            let p = carrinho[i];
            html += `
                <article class="item cart-item">
                    <div class="item-image">
                        <img src="${p.imagem}" alt="${p.nome}" />
                    </div>
                    <div class="item-description cart-item-description">
                        <div class="cart-item-top">
                            <div class="cart-item-copy">
                                <h3>${p.nome}</h3>
                                <p>${p.descricao}</p>
                            </div>
                            <div class="cart-unit-price">
                                <small>Preço</small>
                                <span>R$ ${p.preco.toFixed(2)}</span>
                            </div>
                        </div>
                        <div class="cart-purchase-info">
                            <div class="cart-quantity-block">
                                <small>Quantidade</small>
                                <div class="cart-quantity">
                                    <button onclick="mudar(${i}, -1)">-</button>
                                    <span>${p.quantidade}</span>
                                    <button onclick="mudar(${i}, 1)">+</button>
                                </div>
                            </div>
                            <div class="cart-subtotal">
                                <small>Subtotal</small>
                                <strong>R$ ${(p.preco * p.quantidade).toFixed(2)}</strong>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }

        lista.innerHTML = html || "<p>Carrinho vazio.</p>";

        const frete = 49.90;
        const subtotal = carrinho.reduce((acc, p) => acc + p.preco * p.quantidade, 0);
        rows[0].textContent = `R$ ${subtotal.toFixed(2)}`;
        rows[1].textContent = `R$ ${frete.toFixed(2)}`;
        rows[2].textContent = `R$ ${(subtotal + frete).toFixed(2)}`;
    }

    window.mudar = function (i, delta) {
        carrinho[i].quantidade += delta;
        if (carrinho[i].quantidade <= 0) carrinho.splice(i, 1);
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
        renderizar();
    };

    renderizar();
});