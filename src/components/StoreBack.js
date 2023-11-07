import React from "react";

function StoreBack({name, email, location}){
    return <div>
        <p><b>Store Name</b> : {name}</p>
        <p><b>Location</b> : {location}</p>
        <p><b>Email</b> : {email}</p>
    </div>
}

export default StoreBack