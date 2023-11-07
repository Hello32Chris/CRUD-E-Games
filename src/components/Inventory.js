import React from "react";
import GameDetails from "./GameDetails";

function Inventory( { gamesArr } ) {
    const mappedGamesArr = gamesArr.map((game) => {
        return <GameDetails 
        key={game.id}
        description={game.description}
        name={game.name}
        price={game.price}
        quantitiy={game.quantitiy}
        store={game.store}
        type={game.type}
        
        
        />

})
    return(
        <div className="card-container">
            {mappedGamesArr}
        </div>

    )
}

export default Inventory