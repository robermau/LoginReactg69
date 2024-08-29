import { Routes,Route } from 'react-router-dom'
import './App.css'
import Registro from './components/Registro'
import Home from './components/Home'
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState({ error: false, msg: "", color: "" });
  return (

    <>
    
      <Routes>
         <Route path='/' element={ <Registro />} />
         <Route path='/home' element={<Home alert={alert} setAlert={setAlert} />} />

      </Routes>
      {alert.msg && (
        <div className={`alert alert-${alert.color}`}>
          {alert.msg}
        </div>
      )}
    </>
  )
}

export default App
