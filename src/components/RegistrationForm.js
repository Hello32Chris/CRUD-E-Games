import React, { useEffect, useState } from "react";

function RegistrationForm() {

    // const [name, setName] = useState('')
    // const [username, setUsername] = useState('')
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    // const [age, setAge] = useState('')
    const [registrationStatus, setRegistrationStatus] = useState(null)

    const [showPassword, setShowPassword] = useState(false);
    const [customers, setCustomers] = useState([])
    const [newUser, setNewUser] = useState({
        name: "",
        username: "",
        password: "",
        email: "",
        age: ""
    })


    useEffect(() => {
        fetch('/customers')
            .then(resp => resp.json())
            .then(data => setCustomers(data))
    }, [])

    console.log(customers)

    function handleChange(e) {
        const { name, value } = e.target
        const newValue = name === "age" ? parseInt(value) : value
        setNewUser({ ...newUser, [name]: newValue })
    }

    const handleRegister = async (e) => {
        // const userData = { name, username, password, email, age };
        e.preventDefault()
        // fetch('/customers', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(newUser),
        // })
        //     .then((resp) => (resp.json())
        //     )
        //     .then(newUser => setCustomers([...customers, newUser]))
        // // .then(newUser => setNewUser([...customers, newUser]))
        try {
            const response = await fetch('/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                console.log('User added successfully');
                e.target.name.value = ""
                e.target.username.value = ""
                e.target.password.value = ""
                e.target.email.value = ""
                e.target.age.value = ""// You can reset the form or perform other actions here
            } else {
                console.error('Failed to add user');
            }
        } catch (error) {
            console.error('Error:', error);
        }

    };



    function handleShowPassword() {
        setShowPassword(!showPassword)
    }


    return (
        <div>
            <h2>Reister New Account!</h2>
            <form name='form' onSubmit={handleRegister}>
                <input
                    type="text"
                    name="name"
                    placeholder='Name'
                    value={newUser.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="username"
                    placeholder='Username'
                    value={newUser.user_name}
                    onChange={handleChange} />
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder='Password'
                    value={newUser.password}
                    onChange={handleChange}
                />
                <button id="showPasswrd" onClick={handleShowPassword}>show password</button>
                <input
                    type="text"
                    name="email"
                    placeholder='Email'
                    value={newUser.email}
                    onChange={handleChange} />

                <input
                    type="number"
                    name="age"
                    placeholder='Age'
                    value={newUser.age}
                    onChange={handleChange}
                />
                <input id="register" type="submit" name="Register" ></input>
                {registrationStatus && <p>{registrationStatus}</p>}
            </form>
        </div>
    )
}

export default RegistrationForm;