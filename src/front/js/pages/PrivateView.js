//aca deberia existir el componente PrivateView donde me de la bienvenida a mi perfil, nada mas :D
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import { Logout } from "./Logout";

export const PrivateView = () => {
 const { store, actions } = useContext(Context);
  console.log(store.datos?.token);
  console.log(store.usuario);
  const { id } = useParams();
  const history = useHistory();

	useEffect(() => {
    actions.datosPrivados(id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1 className="text-center">Bienvenida Macarena {store.usuario.name}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h2 className="text-center">Perfil Privado</h2>
          </div>
        </div>
        <div className="row mt-3 text-center">
          <div className="col">
            
<Link to="/Logout">
            <button
              onClick={() => {
                actions.logout(history);
              }}
              className="btn btn-primary me-3"
            >

              Logout
            </button>
</Link>
            <Link to="/">
              <button className="btn btn-primary">Back home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
        