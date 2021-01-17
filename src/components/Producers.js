//PACKS
import React, { Component } from 'react'
import Axios from 'axios'

//COMPONENTS
import DisplayGrid from "./DisplayGrid.js"

export default class Producers extends Component {
    state = {
        producers: []
    }
    getProducers() {
        Axios.get('http://localhost:3001/producers')
        .then(
            (res)=>{
                this.setState({producers: res.data})
            }
        )
            
    }

    componentDidMount(){
        this.getProducers()
    }

    render() {
        return (
            <div>
            <DisplayGrid collection={this.state.producers} w="20vw" h="20vw" getDisplayItem={this.props.getDisplayItem.bind(this)}/>
            </div>
        )
    }
}
