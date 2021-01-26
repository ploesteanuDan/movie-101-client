//PACKS
import React, { Component } from 'react'

//STYLE
import "../styles/DisplayGrid.css"

export default class DisplayGrid extends Component {

    render() {
        return (
            <div className = "CardsContainer">
            {this.props.collection.map(item=>
            <div className="Card" onClick={()=>{this.props.getDisplayItem(item, this.props.type)}} style={{width: this.props.w, height: this.props.h}}>
            <div style={{display: item.movieYear ? "block" : "none"}}>
            <div className="CardThumbnailContainer" style={{width: this.props.w, height: this.props.h}}>
            <img className="CardThumbnail" src={"https://i.imgur.com/"+item.movieThumbnail} alt='thumbnail' />
            </div>
            <div className="CardTitle">
                {item.movieName}
            </div>
            <div className="NewMovie" style={{display: item.movieYear >= 2017 ? "block" : "none"}}>
                NEW
            </div>
            </div>
            <div style={{display: item.producerBorn ? "block" : "none"}}>
            <div className="CardThumbnailContainer" style={{width: this.props.w, height: this.props.h}}>
            <img className="CardThumbnail" src={"https://i.imgur.com/"+item.producerThumbnail} alt='thumbnail' />
            </div>
            <div className="CardTitle">
                {item.producerName}
            </div>
            <div className="NewMovie" style={{display: item.producerYear >= 2017 ? "block" : "none"}}>
                NEW
            </div>
            </div>
            </div>
            )}
        </div>
        )
    }
}
