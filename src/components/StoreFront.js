import React, { useState, useEffect } from "react";
import HomeGames from "./HomeGames";



function StoreFront({ gamesArr, searchTerm }) {
    // console.log(gamesArr)


    const filteredArr = gamesArr.filter(gameobj => {
                
        return  gameobj.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                gameobj.price.toString().includes(searchTerm) ||
                gameobj.type.toLowerCase().includes(searchTerm.toLowerCase())
                // gameobj.quantitiy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                // gameobj.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
                // gameobj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                
    })

    const mappedHomeGames = filteredArr.map((homeGameObj) => {
        // console.log(homeGameObj)
        return <HomeGames
            key={homeGameObj.id}
            description={homeGameObj.description}
            name={homeGameObj.name}
            price={homeGameObj.price}
            quantitiy={homeGameObj.quantitiy}
            store={homeGameObj.store}
            type={homeGameObj.type}
            img={homeGameObj.img}
        />

})

    return (
        <>
            <div className="home-game-container">
                {mappedHomeGames}
            </div>
        </>
    )
}


export default StoreFront