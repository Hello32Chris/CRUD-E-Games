import React from "react";
import CustomerView from "./CustomerVIew";

function Account( {customerArr} ) {

    const customerView = customerArr.map((customer) => {
        return <CustomerView key={customer.id}
          name = {customer.name}
          email = {customer.email}
          age = {customer.age}
          membership = {customer.membership}
        />
    })
    // console.log(customerView)

    return (
    <div id='customerview'>
        {customerView}
    </div>
  );
}

export default Account;