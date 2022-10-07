import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import Router from './Router';
import React from 'react';
import Header from './components/Header';
function App() {
  
  return (
    <Provider store={store}>
     
    <div>
        <BrowserRouter>
        <Header/>
            <Router />
        </BrowserRouter>
    </div>
    </Provider>
    
    
  );
}

export default App;
