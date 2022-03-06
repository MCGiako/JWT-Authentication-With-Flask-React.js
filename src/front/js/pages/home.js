import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom"
import  Login  from "../pages/login";
import  SignupRegister  from "../pages/SignupRegister";
 
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Misiones para Renato</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<ul>
				<li> Vista privada debe tener un componente</li>
				<li>Botones que me lleven a la vista de login y registro</li>
				<li>La mision de flux se hace con la maca :D</li>
			</ul>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
				<Link to="/Login">
						<button className="btn btn-primary">Login</button>
					</Link>
						<Link to="/SignupRegister">
						<button className="btn btn-primary">Sign Up</button>
					</Link>
		</div>
	);
};
