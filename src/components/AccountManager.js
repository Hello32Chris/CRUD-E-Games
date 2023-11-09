import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function AccountManager({ loggedInID, loggedIn, setLoggedIn }) {

    const [custData, setCustData] = useState({})
    const [makeChanges, setMakeChanges] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const [newData, setNewData] = useState({
        name: "",
        username: "",
        password: "",
        email: ""
    });
    const history = useHistory()

    useEffect(() => {
        setNewData({
            name: custData.name,
            username: custData.user_name,
            password: custData.password,
            email: custData.email
        });
    }, [custData]);

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
                body: JSON.stringify(changedFields),
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
    const logOut = (e) => {
        setLoggedIn(!loggedIn)
        history.push('/CustomerLogin')
    }

    console.log(makeChanges)
    return (
        <div className="loginform">{makeChanges ?
            <div className="centered-content">
                <h1 className="login">Name:</h1>
                <p className="login">{custData.name}</p>
                <br />
                <h1 className="login">Email:</h1>
                <p className="login">{custData.email}</p>
                <br />
                <h1 className="login">UserName:</h1>
                <p className="login">{custData.user_name}</p>
                <br />
                <h1 className="login">Password</h1>
                <p className="login">{custData.password}</p>
                <button className="login" onClick={() => setMakeChanges(!makeChanges)}>Make Changes</button>
                <br/>
                <button className="login" onClick={logOut}>Logout</button>
            </div> :
            <div>
                <h2 className="login" align = 'center'>Edit Account</h2>
                <form id="regform" name="form" onSubmit={updateInfo}>
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
                    <button className="login" type='button' id="showPasswrd" onClick={() => setShowPassword(!showPassword)}>show password</button>
                    <br />
                    Email: <input
                        className="reginput"
                        type="text"
                        name="email"
                        placeholder={custData.email}
                        value={newData.email}
                        onChange={handleChange} />
                    <br />
                    <input className="login" id="register" type="submit" name="Register" ></input>
                    <br />
                    <button className="login" type="button" onClick={() => setMakeChanges(!makeChanges)}>Return</button>
                </form>
            </div>}

        </div>
    )
}

export default AccountManager