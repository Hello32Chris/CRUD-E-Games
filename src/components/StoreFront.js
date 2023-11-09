import React, {useState, useEffect}from "react";
import HomeGames from "./HomeGames";
import Search from "./Serach";


function StoreFront({gamesArr}) {
    // console.log(gamesArr)

    const [searchTerm, setSearchTerm] = useState("")
    
    const filteredArr = mappedHomeGames.filter(gameobj => (
            gameobj.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            gameobj.name.includes(searchTerm) ||
            gameobj.price.toString().includes(searchTerm) ||
            gameobj.quantitiy.toLowerCase().includes(searchTerm.toLowerCase()) ||
            gameobj.store.toLowerCase().includes(searchTerm.toLowerCase()) ||
            gameobj.type.toLowerCase().includes(searchTerm.toLowerCase())
    ))
    const mappedHomeGames = gamesArr.map((homeGameObj)=>{
        console.log(homeGameObj)

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

    return(
    <>
    <Search setSearchTerm={setSearchTerm}/>
    <div className="home-game-container">
        {mappedHomeGames}
    </div>
    </>
    )
}


export default StoreFront