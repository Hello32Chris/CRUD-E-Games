import { useState } from "react";
import React from "react";

function GameDetails({ description, name, price, quantity, store, type, img }) {

    // console.log(store)
    const [isFlipped, setIsFlipped] = useState(false);
    const [inCart, setInCart] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

    const cardToggle = isFlipped ? "flipped" : '';

    const addToCart = () => {
        setInCart(!inCart);

    }

    return (
        <div className={`card ${cardToggle}`} onClick={flipCard}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={img} alt={name} />
                    <h2>{name}</h2>
                </div>
                <div className="card-back">
                    <p>{name}</p>
                    <h5>{description}</h5>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <p>{type}</p>
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

            export default GameDetails

