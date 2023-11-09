import React, { useEffect, useState } from "react";

function AccountManager({ loggedInID }) {

    const [custData, setCustData] = useState({})
    const [makeChanges, setMakeChanges] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [newData, setNewData] = useState({
        name: custData.name,
        username: custData.user_name,
        password: custData.password,
        email: custData.email
    })

    useEffect(() => {
        fetch(`customers/${loggedInID}`)
            .then((resp) => resp.json())
            .then(setCustData)
    }, [loggedInID])

    const updateInfo = async (e) => {
        e.preventDefault()
        try {
            const changedFields = {};

            // Compare each field in newData with custData and add changed ones to changedFields
            for (const key in newData) {
                if (newData[key] !== custData[key]) {
                    changedFields[key] = newData[key];
                }
            }
            const response = await fetch(`customers/${loggedInID}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
            });

            if (response.ok) {
                // // ReFetch Updated Data
                fetch(`customers/${loggedInID}`)
                    .then((resp) => resp.json())
                    .then(setCustData);

                setMakeChanges(true); // Switch back to view mode after updating
            } else {
                console.error('Failed to update customer information');
                alert('Failed to update customer information\n\n VALIDATION ERRORS');
            }
        } catch (error) {
            console.error('Error updating customer information', error);
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target
        setNewData({ ...newData, [name]: value })
    }

    console.log(makeChanges)
    return (
        <div className="loginform">{makeChanges ?
            <div className="centered-content">
                <h1>Name:</h1>
                <p>{custData.name}</p>
                <br />
                <h1>Email:</h1>
                <p>{custData.email}</p>
                <br />
                <h1>UserName:</h1>
                <p>{custData.user_name}</p>
                <br />
                <h1>Password</h1>
                <p>{custData.password}</p>
                <button onClick={() => setMakeChanges(!makeChanges)}>Make Changes</button>
            </div> :
            <div>
                <form name="form" onSubmit={updateInfo}>
                    Name:<input
                        className="reginput"
                        type="text"
                        name="name"
                        placeholder={custData.name}
                        value={newData.name}
                        onChange={handleChange}
                    />
                    <br />
                    Username:<input
                        className="reginput"
                        type="text"
                        name="username"
                        placeholder={custData.user_name}
                        value={newData.user_name}
                        onChange={handleChange} />
                    Password: <input
                        className="reginput"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder={custData.password}
                        value={newData.password}
                        onChange={handleChange}
                    />
                    <button type='button' id="showPasswrd" onClick={() => setShowPassword(!showPassword)}>show password</button>
                    <br />
                    Email: <input
                        className="reginput"
                        type="text"
                        name="email"
                        placeholder={custData.email}
                        value={newData.email}
                        onChange={handleChange} />
                    <br />
                    <input id="register" type="submit" name="Register" ></input>
                    <br />
                    <button type="button" onClick={() => setMakeChanges(!makeChanges)}>Return</button>
                </form>
            </div>}

        </div>
    )
}

export default AccountManager