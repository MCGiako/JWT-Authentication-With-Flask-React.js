import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { PrivateView } from "../pages/PrivateView";
import { Link } from "react-router-dom"

export const Login = () => {
    const { store, actions } = useContext(Context);;
    const [datos, setDatos] = useState({ email: "", password: "" })




    return (
        <div className="text-center mt-5">


            <div>
                <input type="text" placeholder="Email" onChange={(e) => {
                    let aux = datos;
                    aux.email = e.target.value;
                    setDatos(aux)
                    console.log(datos)

                }} />
                <input type="password" placeholder="Password" onChange={(e) => {
                    let aux = datos;
                    aux.password = e.target.value;
                    setDatos(aux)
                    console.log(datos)

                }} />
                <Link to={"./PrivateView"}>
                    <button onClick={() => {
                       
                        actions.setLogin(datos)
                    }}>Login</button>

                </Link>

            </div>
        </div>
    );
};
