import React, { useState, useEffect } from "react";




function Cart({ cart, setCart }) {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [getItemsId, setItemsId] = useState([])

    useEffect(() => {
        // Fetch the list of items from the Flask API.
        fetch('/items')
            .then(resp => resp.json())
            .then(data => {
                setItemsId(data.map(item => item.id));
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(getItemsId)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div>
            <button className="cart-toggle" onClick={toggleCart}>
                {isCartOpen ? 'Close Cart' : 'Open Cart'}
            </button>
            {isCartOpen && (
                <div className="cart-container">
                    <h2>Cart</h2>
                    <ul>
                        {cart.map(itemId => (
                            <li key={itemId}>
                                {itemId ? `Item ID: ${itemId}` : [itemId]}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Cart;