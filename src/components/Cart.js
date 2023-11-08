import React, { useState, useEffect } from "react";




function Cart({ cart, setCart }) {

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        // Fetch the list of items from the Flask API.
        fetch('/items')
            .then(resp => resp.json())
            .then(data => {
                setCart(data.map(item => item.id));
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div>
            <button className="cart-toggle" onClick={toggleCart}>
                {isCartOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            <div className={`cart-container ${isCartOpen ? 'open' : 'closed'}`} >
                <h1>Shopping Cart</h1>
                <h2>Cart</h2>
                <ul>
                    {cart.map(itemId => (
                        <li key={itemId}>
                            {itemId ? `Item ID: ${itemId}` : "Add items to the cart!"}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Cart;