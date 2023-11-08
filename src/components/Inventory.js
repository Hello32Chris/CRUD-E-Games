import React, { useState } from "react";
import GameDetails from "./GameDetails";
import Cart from "./Cart";

export default function Inventory( { gamesArr } ) {
    const mappedGamesArr = gamesArr.map((game) => {
        return <GameDetails 
        key={game.id}
        description={game.description}
        name={game.name}
        price={game.price}
        quantitiy={game.quantity}
        store={game.store}
        type={game.type}
        addItemToCart={addItemToCart}
        />
    });

//------------------use states------------------------
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState({});



    function addItemToCart(itemId)  {
        // Check if the item is already in the cart using cartItems.
        if (!cartItems[itemId]) {
            // Update the cart state locally.
            const updatedCart = [...cart, itemId];
            setCart(updatedCart);
            setCartItems({ ...cartItems, [itemId]: true });
            return cartItems;
            //write a code that increments the quantity up if item does exist in cart
        }
    }
    return(
        <div>
            <div id="cart"><Cart setCart={setCart} cart={cart}/></div>
        <div className="card-container">
            {mappedGamesArr}
        </div>
        </div>

    )
}

