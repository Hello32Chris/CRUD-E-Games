import React, { useState } from "react";

function CustomerView( { id, name, email, age, membership } ) {
   
    const [customers, setCustomers] = useState([]);

      console.log(customers.age)
      
      function handleDeleteCustomer(id) {
        fetch(`/customers/${id}`, { method: "DELETE" }).then((resp) => {
          if (resp.ok) {
            setCustomers((customerArr) =>
              customerArr.filter((cust) => cust.id !== id)
            );
            window.location.reload();
            alert(`Customer ${name} Deleted!`)
          }
        });
      }


    return (
    <div>
        <br/>
        <b>Name: {name}</b>
        <p><b>Email:</b> {email}</p>
        <p><b>Age:</b> {age}</p>
        <p><b>Membership:</b> {membership ? "Im a Member!" : "Not a member yet!"}</p>
        <br/>
        <button onClick={() => handleDeleteCustomer(id)}>Delete</button>
        <br/>
    </div>
)};

export default CustomerView;