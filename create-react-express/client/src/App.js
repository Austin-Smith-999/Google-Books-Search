import React, { Component } from "react";
// import Card from "./components/Card";
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route>
            
          </Route>
        </Switch>
      </Router>
      {/* <Card /> */}
    </div>
    

  );
}


export default App;
