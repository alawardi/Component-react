import React from 'react'
import ListItems from './ListItems'
function Cart (){
    return(
        <div className="cart">
            <h1>Item In your Cart</h1>
            <div className="container">
                <span className="word">Product</span>
                <span className="word">Quality</span>
                <span className="word">Button</span>
            </div>
            <ListItems/>
        </div>
    );
}
export default Cart;