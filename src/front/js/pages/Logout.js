import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

export const Logout = () => {
    const { store, actions } = useContext(Context);

    return (

<div className="container">
			<h1>Haz finalizado tu sesión exitosamente.</h1>
        </div>
    
    );
};