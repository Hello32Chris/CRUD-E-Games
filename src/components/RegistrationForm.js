import React, { useEffect, useState } from "react";

function RegistrationForm() {

    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')
    const [registrationStatus, setRegistrationStatus] = useState(null)

    const [showPassword, setShowPassword] = useState(false);

    const [customers, setCustomers] = useState([])
    const [newuser, setNewUser] = useState({
        name : "",
        username : "",
        password : "",
        email : "",
        age : ""
    })


    useEffect(() => {
        fetch('http://127.0.0.1:5555/customers')
            .then(resp => resp.json())
            .then(data => setCustomers(data))
    }, [])

    const handleRegister = (e) => {
        const userData = { name, username, password, email, age };

        fetch('http://127.0.0.1:5555/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then((resp) => (resp.json())
            )
            .then(newUser => setNewUser([...customers, newUser]))
            e.target.name.value = ""
            e.target.username.value = ""
            e.target.password.value = ""
            e.target.email.value = ""
            e.target.age.value = ""
    };



function handleShowPassword() {
    setShowPassword(!showPassword)
}


return (
    <div>
        <h2>Reister New Account!</h2>
        <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button id="showPasswrd" onClick={handleShowPassword}>show password</button>
        <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
            type="number"
            placeholder='Age'
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <button id="register" onClick={handleRegister}>Register</button>
        {registrationStatus && <p>{registrationStatus}</p>}

    </div>
    )
}

export default RegistrationForm;