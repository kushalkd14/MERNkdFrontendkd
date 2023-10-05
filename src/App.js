import React, { createContext, useReducer } from 'react';
import Navbar from './component/Navbar';
import { Route,Routes } from "react-router-dom";
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Signup from './component/Signup';
import Contact from './component/Contact';
import Logout from './component/Logout';
import './App.css';
import { initialState, reducer } from './reducer/UseReducer';
export const userContext = createContext();
export const Routing=()=>{
  return(
    <Routes>
        <Route exact path='/' element={<Home />}/>
          
        
        <Route exact path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <userContext.Provider value={{state,dispatch}}>
      <Navbar />
      <Routing/>
    </userContext.Provider>
      
    </>
  )
}

export default App
