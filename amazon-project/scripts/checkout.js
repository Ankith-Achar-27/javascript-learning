import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { cart } from "../data/cart-class.js";
import {updateCartQuantity} from "./utils/updateCart.js"
import {renderCheckoutHeader} from "./utils/updateCheckoutHeader.js"
//import '../data/backend-practise.js'


const quantity = updateCartQuantity(cart);
renderCheckoutHeader(quantity);

renderOrderSummary();
renderPaymentSummary();
