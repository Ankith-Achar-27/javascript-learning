export function updateCartQuantity(cart) {
    let cartQuantity = 0;

    cart.cartItems.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    });

    const cartQuantityElement = document.querySelector('.js-cart-quantity');

    if (cartQuantityElement) {
        cartQuantityElement.innerHTML = cartQuantity;
    }

    return cartQuantity;
}
