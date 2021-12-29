import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const { email, setEmail } = useState("");
    const { password, setPassword } = useState("");

    const handleClick = () => {

        const options = {
            method: "POST",
            body: JSON.stringify ({

                "email": email,
                "password": password

            })
        }

        fetch("https://3000-rose-hummingbird-1u65s9i7.ws-us25.gitpod.io/api/token", options)
.then (resp => {
    if (resp.status === 200) return resp.json ();
    else alert ("There has been a some error");
})
.then ()

.catch(error =>{console.error("Tu tienes un error", error); })
    }

    return (
        <div className="text-center mt-5">
            <h1>Login</h1>
            <div>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.tarjet.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.tarjet.value)} />
                <button onClick={handleClick}>Login</button>

            </div>
        </div>
    );
};
