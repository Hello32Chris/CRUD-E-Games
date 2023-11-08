import { useState } from "react";
import React from "react";

function GameDetails( {description, name, price, quantity, store, type, img } ){

    // console.log(store)
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped)
    }

    const cardToggle = isFlipped ? "flipped" : ''



    return (
        <div className={`card ${cardToggle}`} onClick={flipCard}>
            <div className="card-inner">
                <div className="card-front">
                    <img src ={img} alt = {name}/>
                    <h2>{name}</h2>
                </div>
                <div className="card-back">
                    <h2>{name}</h2>
                    {/* <img /> */}
                    <p>{description}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
                    <p>{type}</p>
                </div>
            {/* <p>{store}</p> Uncomment this line to display the store information */}
            </div>
        </div>
    );
}

export default GameDetails

// {img}