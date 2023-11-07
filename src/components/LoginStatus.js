import React from "react";
import LoginForm from "./LoginForm";

function LoginStatus({customers}){
    const user = JSON.parse(sessionStorage.getItem('user'))

    console.log(customers)

    // customer = customers.map((customer) =>{
    //     return customer
    // })

    if(user) {
        // return <div>Welcome, {customer.name}!</div>
    } else {
        return <LoginForm />
    }
}

export default LoginStatus