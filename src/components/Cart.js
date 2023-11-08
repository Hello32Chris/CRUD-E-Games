import React, { useState, useEffect } from "react";
import CartItems from "./CartItems";


function Cart({ customer_id }) {

    const [cart, setCart] = useState([])
    const [isCart, setIsCart] = useState(false)

    useEffect(() => {
        fetch(`/carts/customer_${customer_id}`)
            .then((resp) => {
                if (resp.status === 404) {
                    setIsCart(true);
                    return {};
                } return resp.json()
            })
            .then((data) => {
                setCart(data)
            })
    }, [customer_id])

    console.log(cart)


    return (
        <div>
            {isCart && <p>New cart has been created.</p>}
            <button>View Cart</button>
            <CartItems
                items={cart.items}
                customer={cart.customer}
            />
        </div>
    )
}

export default Cart