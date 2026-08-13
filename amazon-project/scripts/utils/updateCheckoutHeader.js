export function renderCheckoutHeader(cartQuantity) {
    document.querySelector('.js-checkout-header-middle-section')
        .innerHTML = `
            Checkout (
                <a class="return-to-home-link" href="amazon.html">
                    ${cartQuantity} items
                </a>
            )
        `;
}
