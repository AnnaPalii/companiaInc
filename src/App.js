import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Userview from "./components/Userview";

function App(){
  return (
      <div className="App">
          <Header></Header>
          <br></br>
          <Userview/>
      </div>
  );
}

export default App;
