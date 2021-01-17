//PACKS
import React, { Component } from 'react'
import Axios from 'axios'

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
            <div>
             <Hero/>
                <DisplayGrid collection={this.state.movies} w="19vw" h="25vw" getDisplayItem={this.props.getDisplayItem.bind(this)}/>
            </div>
        )
    }
}
