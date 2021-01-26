//PACKS
import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Axios from 'axios'
import {Spring} from "react-spring/renderprops"

//STYLE
import "./App.css"

//COMPONENTS
import Movies from "./components/Movies"
import Producers from "./components/Producers"
import Edit from "./components/Edit"
import DisplayInfo from "./components/DisplayInfo"

export default class App extends Component {
    state={
      item: "",
      itemType: "",
      itemDetails: ""
    }

    getDisplayItem(item, type){
      if(type=="movie")
      {
        Axios.get('http://localhost:3001/movies/details', { params: { movieID: item.movieID } })
        .then(
            (res)=>{
                this.setState({itemDetails: res.data, item: item, itemType: type})    
            }
        ).catch((err)=>{console.log(err)})
      }
      else if(type=="producer"){
        Axios.get('http://localhost:3001/producers/details', { params: { producerID: item.producerID } })
        .then(
            (res)=>{
                this.setState({itemDetails: res.data, item: item, itemType: type})    
            }
        ).catch((err)=>{console.log(err)})
      }
      else{
        this.setState({item:"", itemDetails:"", itemType:""})
      }
    }

    render() {
        return (
           <div>
             <Router>
              <div>
                  <div className="NavContainer">
                  <nav>
                  <Spring
                    from={{ opacity: 0, display: "flex" }}
                    to={{ opacity: 1}}>
                    {props => 
                      <div style={props}>
                        <li>
                          <Link className="link" to="/">Movies</Link>
                        </li>
                        <li>
                          <Link className="link" to="/producers">Producers</Link>
                        </li>
                      </div>}
                  </Spring>
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
                  <Route path="/edit">
                      <Edit />
                  </Route>
                  <Route path="/">
                      <Movies getDisplayItem={this.getDisplayItem.bind(this)} />
                  </Route>
                </Switch>
              </div>
            </Router>
            <DisplayInfo getDisplayItem={this.getDisplayItem.bind(this)} type={this.state.itemType} item={this.state.item} itemDetails={this.state.itemDetails}/>
           </div>
        )
    }
}
