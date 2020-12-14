import React, { Component } from 'react';
import './App.css';
import { MDBBtn } from "mdbreact";
import { BrowserRouter  } from 'react-router-dom'
import Route from './Routes/Route'

function App() {
  return (

   <BrowserRouter>
<Route/>
   </BrowserRouter>
  );
}

export default App;
