import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart-class.js";
import {updateCartQuantity} from "./utils/updateCart.js"
import {renderCheckoutHeader} from "./utils/updateCheckoutHeader.js"
import {loadProductsFetch} from "../data/products.js"
import {loadCart} from "../data/cart-class.js";
//import '../data/backend-practise.js'


const quantity = updateCartQuantity(cart);
renderCheckoutHeader(quantity);


async function loadPage(){

    try{
        await loadProductsFetch();

        await new Promise((resolve)=>{
            loadCart(()=>{
                resolve();
            })
        });
    } catch (error) {
        console.error('Error in loadPage()', error);
    }

    renderOrderSummary();
    renderPaymentSummary();
}
loadPage().then(()=>{
    console.log("load page");
});
/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })

]).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/


/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve();
    });
}).then(()=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
});
*/