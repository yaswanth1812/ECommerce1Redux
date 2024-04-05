import React from "react";
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import FilterProducts from './components/filterProducts/FilterProducts';
import SingleProduct from './components/filterProducts/singleProduct';
import LogIn from "./components/LogIn/LogIn";


function App() {
  const user = useSelector((state)=> state.user.user);
  const {authUser} =user;
  console.log("user", user);
  console.log("author", authUser);
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={authUser? <Main/> : <LogIn/>}/>
        <Route path ="/login" element={<LogIn/>}/>
        <Route path ="/filterProducts/:type" element={<FilterProducts/>}/>
        <Route path = "/filterProducts/:type/:id" element ={<SingleProduct/>}/>
      </Routes>
      
      </BrowserRouter>
      </div>

    
  
  
  );
}

export default App;
