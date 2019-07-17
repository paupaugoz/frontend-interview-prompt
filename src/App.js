import React from 'react';
import NavBar from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer.js';
import { StylesProvider } from "@material-ui/styles";


import './App.css';

function App() {
  
  return (
    <StylesProvider injectFirst>
    <div className="App">  
    <NavBar />
    <Footer />   
    </div>
    </StylesProvider>
  );
}

export default App;
