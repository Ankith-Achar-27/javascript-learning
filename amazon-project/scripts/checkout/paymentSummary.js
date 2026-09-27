import { cart } from "../../data/cart-class.js";
import { getProduct } from "../../data/products.js";
import {getDeliveryOption} from "../../data/deliveryOptions.js";
import {addOrder} from "../../data/orders.js";

export function renderPaymentSummary(){
    let productPrice = 0;
    let shippingPrice =0;

    cart.cartItems.forEach((cartItem)=>{
       const product =  getProduct(cartItem.productId);
       productPrice += product.priceRupees * cartItem.quantity;

       const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
       shippingPrice += deliveryOption.priceRupees;
    });

    const totalBeforeTax = productPrice + shippingPrice;
    const tax = (totalBeforeTax*0.1);
    const total = (totalBeforeTax + tax);

    const paymentSummaryHTML = `
             <div class="payment-summary-title">
                    Order Summary
                </div>

                <div class="payment-summary-row">
                    <div>Items (3):</div>
                    <div class="payment-summary-money">₹${productPrice.toFixed(2)}</div>
                </div>

                <div class="payment-summary-row">
                    <div>Shipping &amp; handling:</div>
                    <div class="payment-summary-money">₹${shippingPrice.toFixed(2)}</div>
                </div>

                <div class="payment-summary-row subtotal-row">
                    <div>Total before tax:</div>
                    <div class="payment-summary-money">₹${totalBeforeTax.toFixed(2)}</div>
                </div>

                <div class="payment-summary-row">
                    <div>Estimated tax (10%):</div>
                    <div class="payment-summary-money">₹${tax.toFixed(2)}</div>
                </div>

                <div class="payment-summary-row total-row">
                    <div>Order total:</div>
                    <div class="payment-summary-money">₹${total.toFixed(2)}</div>
                </div>

                <button class="place-order-button button-primary js-place-order">
                    Place your order
                </button>
    `;

    document.querySelector('.js-payment-summary')
        .innerHTML = paymentSummaryHTML;

    document.querySelector('.js-place-order')
        .addEventListener('click', async (e) => {

            try {
                const response = await fetch('https://supersimplebackend.dev/orders',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        cart:cart
                    })
                });

                const order = await response.json();
                addOrder(order);

            } catch (error){
                console.log('Error in loadPage()', error);
            }
            window.location.href = 'orders.html';
        })
}
