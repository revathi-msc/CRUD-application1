import React, { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import CreateUser from './pages/CreateUser'
import Home from './pages/Home'
import Navigation from './pages/Navigation'
import UpdateUser from './pages/UpdateUser'


function App() {
    const [id,setId] = useState("");
    const getId = (id) => {
        setId(id);
     }
  return (
    <div>
        <BrowserRouter>
          <Navigation/>
         <Routes>
            <Route path='/createForm' element={<CreateUser/>}/>
            <Route path='/updateForm' element={<UpdateUser id={id}/>}/>
            <Route path='/' element={<Home getId={getId}/>}/>
         </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App