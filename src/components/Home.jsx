import { useState } from "react";





const Home = ({alert ,setAlert}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 

  const validarDatos = (e) => {
 
    e.preventDefault()
     
 
    if (email === '' || password === '') {
      setAlert({
        error: true,
        msg: "Complete todos los campos",
        color: "danger",
      });
      return;
    }

  
    const loginSuccessful = true

    if (loginSuccessful) {
      setAlert({
        error: false,
        msg: "¡Inicio de sesión exitoso!",
        color: "success",
      });
      setEmail('');
      setPassword('');
    } else {
      setAlert({
        error: true,
        msg: "No pudo iniciar sesión",
        color: "danger",
      });
    }
  
  }
  return (
    <>
    <h3>Iniciar Sesión</h3>
    <form className="formulario" onSubmit={validarDatos}>
      <div className="form-group mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="tuemail@ejemplo.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="form-group mb-3">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-success">
          Iniciar Sesión
        </button>
      </div>
    </form>
  </>
  )
}

export default Home
