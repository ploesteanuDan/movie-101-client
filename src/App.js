//PACKS
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";

//STYLE
import "./App.css"

//COMPONENTS
import Movies from "./components/Movies"
import Studios from "./components/Studios"
import Producers from "./components/Producers"
import Edit from "./components/Edit"
import DisplayInfo from "./components/DisplayInfo"


export default class App extends Component {
    state={
      displayItem: ""
    }

    getDisplayItem(item){
      this.setState({displayItem:item})
      console.log(item)
    }

    render() {
        return (
           <div>
             <Router>
              <div>
                  <div className="NavContainer">
                  <nav>
                    <li>
                      <Link className="link" to="/">Movies</Link>
                    </li>
                    <li>
                      <Link className="link" to="/producers">Producers</Link>
                    </li>
                    <li>
                      <Link className="link" to="/studios">Studios</Link>
                    </li>
                    <li>
                      <Link className="link" to="/edit">Edit</Link>
                    </li>
                </nav>   
                  </div>
                <div style={{width: "100vw", height: "5vw"}}></div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                  <Route path="/producers">
                      <Producers getDisplayItem={this.getDisplayItem.bind(this)} />
                  </Route>
                  <Route path="/studios">
                      <Studios />
                  </Route>
                  <Route path="/edit">
                      <Edit />
                  </Route>
                  <Route path="/">
                      <Movies getDisplayItem={this.getDisplayItem.bind(this)} />
                  </Route>
                </Switch>
              </div>
            </Router>
            <DisplayInfo getDisplayItem={this.getDisplayItem.bind(this)} item={this.state.displayItem}/>
           </div>
        )
    }
}
