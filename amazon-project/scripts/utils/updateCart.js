export function updateCartQuantity(cart) {
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const cartQuantityElement = document.querySelector('.js-cart-quantity');

    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    }

    return cartQuantity;
}
