import React, { useState } from "react";

function GameDetails( {description, name, price, quantity, store, type, img } ){

    // console.log(store)
    const [isFlipped, setIsFlipped] = useState(false);
    const [inCart, setInCart] = useState(false);
    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

    const cardToggle = isFlipped ? "flipped" : ''

    const addToCart = () => {
        setInCart(!inCart)
    }


    return (
        <div className={"card-container"}>
            <div className="card">
                <div className="card-info">
                    <h2>{name}</h2>
                    <img src={img} alt="" />
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <p>{type}</p>
                    {/* <p>{store}</p> Uncomment this line to display the store information */}
                    {inCart ? (
                        <button onClick={addToCart}>Remove from Cart</button>
                    ) : (
                        <button onClick={addToCart}>Add to Cart</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default GameDetails;