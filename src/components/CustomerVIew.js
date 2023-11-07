import React from "react";

function CustomerView( { name, email, age, membership } ) {
    
    // console.log(name, email, age, membership)

    return (
    <div>
        <br/>
        <div>Name: {name}</div>
        <p><div className="custy">Email:</div> {email}</p>
        <p><div className="custy">Age:</div> {age}</p>
        <p><div className="custy">Membership:</div> {membership ? "Im a Member!" : "Not a member yet!"}</p>
        <br/>
    </div>
)};

export default CustomerView;