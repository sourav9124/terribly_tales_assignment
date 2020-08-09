import React from 'react';
import './App.css';

import {BrowserRouter,Route} from 'react-router-dom'

import User from './User'


function App() {
  return (
      <BrowserRouter>
       
       <Route exact path="/">
       <User />

       </Route>



       </BrowserRouter>
  );
}

export default App;
