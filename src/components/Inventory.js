import React from "react";
import GameDetails from "./GameDetails";
import Cart from "./Cart";

<<<<<<< HEAD
export default function Inventory( { gamesArr } ) {
=======
function Inventory( { gamesArr } ) {
    
>>>>>>> 7f70368f2d7c88578b6de9b76ea244b3dad37e02
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

