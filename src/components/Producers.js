//PACKS
import React, { Component } from 'react'
import Axios from 'axios'
import {Spring} from 'react-spring/renderprops'

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
                     <DisplayGrid collection={this.state.producers} w="20vw" h="20vw" getDisplayItem={this.props.getDisplayItem.bind(this)} type="producer"/>
                </div>}
        </Spring>
        )
    }
}
