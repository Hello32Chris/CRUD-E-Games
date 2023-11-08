import React, { useState } from "react";

function GameDetails( { description, name, price, quantity, store, type, addItemToCart, gId } ){

    const [inCart, setInCart] = useState(false);
    // console.log(store)


    const addToCart = () => {
        // Call the 'addItemToCart' function to add the item to the cart ---- passed this function as a prop from cart
        addItemToCart(gId === gId ? name : null);
        setInCart(true);
    }


    return (
    <div className={"card-container"}>
        <div className="card">
            <div className="card-info">
            <h2>{name}</h2>
            <img alt=""/>
            <p>{description}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{type}</p>
            {/* <p>{store}</p> Uncomment this line to display the store information */}
            {inCart ? (
                <p>Item is in the cart</p>
            ) : (
                <button onClick={addToCart}>Add to Cart</button>
            )}
            </div>
        </div>
    </div>
    );
}

export default GameDetails;

