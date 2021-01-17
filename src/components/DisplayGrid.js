//PACKS
import React, { Component } from 'react'

//STYLE
import "../styles/DisplayGrid.css"

export default class DisplayGrid extends Component {

    render() {
        return (
            <div className = "CardsContainer">
            {this.props.collection.map(item=>
            <div className="Card" onClick={()=>{this.props.getDisplayItem(item)}} style={{width: this.props.w, height: this.props.h}}>
            <div className="CardThumbnailContainer" style={{width: this.props.w, height: this.props.h}}>
            <img className="CardThumbnail" src={"https://i.imgur.com/"+item.thumbnail} alt='thumbnail' />
            </div>
            <div className="CardTitle">
                {item.name}
            </div>
            <div className="NewMovie" style={{display: item.year >= 2017 ? "block" : "none"}}>
                NEW
            </div>
            </div>
            )}
        </div>
        )
    }
}
