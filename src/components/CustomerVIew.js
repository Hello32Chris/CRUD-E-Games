import React from "react";

function CustomerView( { name, email, age, membership } ) {
    
    // console.log(name, email, age, membership)

    return (
    <div>
        <br/>
        <b>Name: {name}</b>
        <p><b>Email:</b> {email}</p>
        <p><b>Age:</b> {age}</p>
        <p><b>Membership:</b> {membership ? "Im a Member!" : "Not a member yet!"}</p>
        <br/>
    </div>
)};

export default CustomerView;