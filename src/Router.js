import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditSubscription from './pages/editSubscription/EditSubscription';
import Login from "./pages/editSubscription/Content/Login";
import Signup from './pages/editSubscription/Content/Signup';
import DropdownEX from './pages/editSubscription/Content/DropdownEX';

const Router = () => {
  return (
    
       
    <Routes>
          <Route path="/" element={<Home/>}/>   
          <Route path='/editsubscript' element={<EditSubscription/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dropdown' element={<DropdownEX/>}></Route>
    </Routes>
            
       
   
  )
}

export default Router