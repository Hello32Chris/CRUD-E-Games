import React from "react";
import GameDetails from "./GameDetails";
import StoreFront from "./StoreFront";
import Cart from "./Cart";

function Inventory({ gamesArr }) {

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
            img={game.img}
        />
    }
    )
    return (
        <div>
            <div className="card-container">
                {mappedGamesArr}
            </div>
        </div>
    )
}

export default Inventory