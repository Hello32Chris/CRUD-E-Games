import React from "react";
import StoreLogForm from "./StoreLogForm";

function StoreLogins({stores, }) {
    const user = JSON.parse(sessionStorage.getItem('user'))

    console.log(stores)

    // customer = customers.map((customer) =>{
    //     return customer
    // })

    if (user) {
        // return <div>Welcome, {customer.name}!</div>
    } else {
        return <StoreLogForm />
    }
}

export default StoreLogins