import React from "react";

function GameDetails( {description, name, price, quantity, store, type } ){

    // console.log(description)



    return (
    <div className={"card-container"}>
        <div className="card">
            <div className="card-info">
            <h2>{name}</h2>
            <img />
            <p>{description}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{type}</p>
            {/* <p>{store}</p> Uncomment this line to display the store information */}
            </div>
        </div>
    </div>
    );
}

export default GameDetails

