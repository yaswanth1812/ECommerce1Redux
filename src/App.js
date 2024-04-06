import React from "react";
import './App.css';
import Main from './components/Main/Main';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import FilteredProducts from "./components/filterProducts/FilteredProducts";
import SingleProduct from "./components/filterProducts/singleProduct";
import LogIn from "./components/LogIn/LogIn";


function App() {
  const user = useSelector((state)=> state.user.user);
  const {authUser} =user;
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={authUser? <Main/> : <LogIn/>}/>
        <Route path ="/login" element={<LogIn/>}/>
        <Route path ="/filteredProducts/:type" 
        element={<FilteredProducts/>}/>
        <Route path = "/filteredProducts/:type/:id" element ={<SingleProduct/>}/>
      </Routes>
      
      </BrowserRouter>
      </div>

    
  
  
  );
}

export default App;
