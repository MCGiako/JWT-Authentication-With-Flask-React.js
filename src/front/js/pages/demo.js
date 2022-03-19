import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";



import { Context } from "../store/appContext";

export const Demo = () => {
	const { store, actions } = useContext(Context);
		const history = useHistory()

	return (
		<div className="container">
			<h1>Demo</h1>
			
				<button onClick={()=> actions.logout(history) } className="btn btn-primary">Back home</button>

			{/*<Link to="/Home">
				<button className="btn btn-primary">Back home</button>
			</Link>*/}
		</div>
	);
};