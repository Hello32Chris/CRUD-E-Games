import React, {useState, useEffect}from "react";

function Search({setSearchTerm}){
    return(
        <input className="searcher"
        type="text" 
        name="searchBar" 
        placeholder="Search..." 
        onChange={e=>setSearchTerm(e.target.value)}/>
    )
}

export default Search;