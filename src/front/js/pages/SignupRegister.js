import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useHistory, Link } from "react-router-dom";


export const SignupRegister = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()

  
  const factores = { nombre: "", email: "", contraseña: "", contraseña2:"", ready: "" };
  
  const [datos, saveData] = useState({nombre: "", email: "", contraseña: "", contraseña2:"", ready: "" });
  const [validacion, setValidacion] = useState(false)
  const [error, setError] = useState("")
  const [errorPassword, setErrorPassword] = useState(false)

  const handleChange = (e) => {
   
    saveData({
        ...datos,
        [e.target.name]: e.target.value
     
      })
    
  };

  const handleReset = () => {
    saveData(factores);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setValidacion(true)
    if(saveData.nombre.trim() == "" || saveData.email.trim() == "" || saveData.contraseña == "" || datos.contraseña2 == ""){
      setError("Todos los campos son Obligatorios")
      return
    }
    setValidacion(false)

    if(saveData.contraseña !== saveData.contraseña2){
      setErrorPassword(true)
      return
    }
    setErrorPassword(false)
    
        
    actions.setsaveData(saveData)
      alert("Usuario Registrado Exitosamente")
      history.push('/')

    handleReset();
  };

  return (
    <div className=" container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center display-4">Registrarse</h2>
          {
            validacion ?<p className="text-center mt-3 alert alert-danger">{error}</p>:null
          }
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-2">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                value={saveData.nombre}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={saveData.email}
                />
            </div>
            <div className="mb-2">
              <label className="form-label">Contraseña</label>
              <input
                type="contraseña"
                className="form-control"
                name="contraseña"
                onChange={handleChange}
                value={saveData.contraseña}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Confirmar contraseña</label>
              <input
                type="password"
                className="form-control"
                name="password_2"
                onChange={handleChange}
                value={saveData.contraseña2}
              />
              {errorPassword ? <p className="text-danger mt-2">*Los datos no coinciden</p>: null}
            </div>
            <div className="d-grid mt-4">
              <button className="btn btn-success">Registrarse</button>
            </div>
            <div className="mt-4 text-center">
              <p className="fw-bold">
                <Link to={"/"}>Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};