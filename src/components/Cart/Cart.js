import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = (total * (10/100)).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
            <div className='cart'>
                <h2 className='cart-title'>Order Summary</h2>
                <div className='cart-text'>
                <p>Selected Items: {cart.length}</p>
                <p>Toatl Price: ${total}</p>
                <p>Total Shipping Charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h5 className='cart-total'>Grand Total: ${grandTotal}</h5>
                </div>
            </div>
    );
};

export default Cart;