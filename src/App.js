import React from "react";
import './App.css'
import Header from "./components/Header/Header";
import Editing from "./components/Editing/Editing";
import List from "./components/ListBirth/List";
import Delete from "./components/Delete/Delete";
import Changes from "./components/Changes/Changes";
import Added from "./components/Added/Added";
import {BrowserRouter, Route} from "react-router-dom";

function App(props) {
  return (
          <div className="App">
              <Header/>
              <Editing/>
              <div>
                  {/*<Route path='/delete' component={Delete}/>
                  <Route path='/changes' component={Changes}/>
                  <Route path='/added' component={Added}/>*/}
                  <List/>
              </div>
          </div>
  );
}

export default App;
