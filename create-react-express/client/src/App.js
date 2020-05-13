import React, { Component } from "react";
// import Card from "./components/Card";
import Header from './components/Header';
// import Card from './components/Card'
import Search from './containers/Search';
import Saved from './containers/Search/Saved';
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
          <Header></Header>
        <Switch>
          <Route path="/Saved">
            <Saved />
          </Route>
          <Route path="/">
            <Search />
          </Route>
        </Switch>
        </Router>
      {/* <Card /> */}
    </div>
    

  );
}


export default App;
