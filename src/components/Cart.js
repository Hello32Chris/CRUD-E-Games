import React, { useState, useEffect } from "react";
import CartItems from "./CartItems";


function Cart({ customer_id }) {

    const [cart, setCart] = useState([])
    const [isCart, setIsCart] = useState(false)
    const customerID = parseInt(customer_id)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(`/carts/customer_${customerID}`);
                if (resp.status === 404) {
                    // Cart doesn't exist, create a new one
                    setIsCart(true);
                    const createResponse = await createNewCart(customerID);
                    setCart(createResponse);
                } else {
                    const data = await resp.json();
                    setCart(data);
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [customerID]);

    const createNewCart = async (customerID) => {
        try {
            const resp = await fetch('/carts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({customer_id : customerID }),
            });
            if (resp.ok) {
                const data = await resp.json();
                console.log(data)
            } else {
                console.error('Failed to create a new cart')
            }
        } catch (error) {
            console.error(error)
        }
    }

    console.log(cart)
    console.log(isCart)


    return (
        <div id="cartbutt">
            <button className="login-butt">View Cart</button>
            {/* <CartItems
                items={cart.items}
                customer={cart.customer}
            /> */}
        </div>
    )
}

export default Cart;