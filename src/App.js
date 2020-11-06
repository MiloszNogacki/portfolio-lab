import logo from './logo.svg';
import './App.css';
 // import main from 'src/scss/main.scss'

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";



function App() {
  return(

       <div>
         <Router>

           
           <Switch>
             <Route exact path="/" component={Home} />

           </Switch>
         </Router>
       </div>

  );
};

export default App;
