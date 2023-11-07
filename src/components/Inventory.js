import React from "react";

function Inventory({ gamesArr }) {
    const mappedGamesArr = gamesArr.map((game) => {
    console.log(game)
})



    return(
        <div className="card-container">
            {mappedGamesArr}
        </div>

    )
}

export default Inventory