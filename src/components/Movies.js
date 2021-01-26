//PACKS
import React, { Component } from 'react'
import Axios from 'axios'
import {Spring} from 'react-spring/renderprops'

//STYLE
import "../styles/Movies.css"

//COMPONENTS
import DisplayGrid from "./DisplayGrid.js"
import Hero from "./Hero"

export default class Movies extends Component {

    state={
        movies: []
    }
    getMovies() {
        Axios.get('http://localhost:3001/movies', { params: { isBanner: 1 } })
        .then(
            (res)=>{
                this.setState({movies: res.data})
            }
        )
            
    }

    componentDidMount(){
        this.getMovies()
    }

    render() {
        return (
            <Spring
                from={{ 
                    opacity: 0,
                    marginTop: "5vw"
                    
                    
                }}
                to={{ 
                    opacity: 1,
                    marginTop: "0px"
                }}>
                {props => 
                    <div style={props}>
                        <Hero getDisplayItem={this.props.getDisplayItem.bind(this)}/>
                        <DisplayGrid collection={this.state.movies} w="19vw" h="25vw" getDisplayItem={this.props.getDisplayItem.bind(this)} type="movie"/>
                    </div>}
            </Spring>
 
        )
    }
}
