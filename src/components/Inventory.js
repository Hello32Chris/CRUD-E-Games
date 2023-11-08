import React from "react";
import GameDetails from "./GameDetails";
import Cart from "./Cart";

export default function Inventory( { gamesArr } ) {
    const mappedGamesArr = gamesArr.map((game) => {
        return <GameDetails 
        key={game.id}
        gId={game.id}
        description={game.description}
        name={game.name}
        price={game.price}
        quantitiy={game.quantity}
        store={game.store}
        type={game.type}
        />
    });

//------------------use states------------------------
    
    console.log(gamesArr.id)

    
    return(
        <div>
            <div id="cart"><Cart /></div>
        <div className="card-container">
            {mappedGamesArr}
        </div>
        </div>

    )
}

