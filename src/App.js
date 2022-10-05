import { Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './App.css';
import Router from './Router';
import React from 'react';

function App() {
  
  return (
    <Provider store={store}>
    <div>
        <BrowserRouter>
        
            <Router />
        </BrowserRouter>
    </div>
    </Provider>
    
    
  );
}

export default App;
