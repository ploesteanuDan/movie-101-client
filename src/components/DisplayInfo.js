//PACKS
import React, { Component } from 'react'
import YouTube from 'react-youtube'

//STYLE
import "../styles/DisplayInfo.css"

export default class DisplayInfo extends Component {
    render() {
        const opts = {
            height: window.innerWidth *0.20,
            width: window.innerWidth *0.35,
            playerVars: {
              // autoplay: 1,
              controls: 1,
              disablekb: 1,
              loop: 0,
              modestbranding: 0,
              fs:0,

            },
          };
        return (
            <div className="DisplayInfoBg" style={{display: this.props.item ? "block" : "none"}}>
                <button className="BackButton" onClick={()=>{this.props.getDisplayItem("")}}>Back</button>
                <div className="DisplayInfoContainer">
                <img src={"https://i.imgur.com/"+this.props.item.thumbnail} alt="thumbnail" className="Thumbnail"/>
                <text className="Title">{this.props.item.name}</text>
                <div style={{display: this.props.item.born ? "block" : "none"}}>
                    <div className="Created">
                    <text className="CreatedTitle">Producer of</text>
                    </div>
                    <text className="Year" style={{top: "26vw"}}>{parseInt(2020 - this.props.item.born)} years old</text>
                    <text className="Year">Born in {this.props.item.nationality}</text>
                    <text className="Plot">"Quote placeholder{this.props.item.quote}"</text>
                </div>
                <div style={{display: this.props.item.year ? "block" : "none"}}>
                    <YouTube
                        videoId={this.props.item.trailer}
                        className="Trailer" 
                        opts={opts}                 // defaults -> null
                    
                    />
                    <text className="Type">{this.props.item.type}</text>
                    <text className="Year">{this.props.item.year}</text>
                    <text className="Produced">Produced by </text>
                    <text className="Plot">"{this.props.item.plot}"</text>
                </div>
                </div>
            </div>
        )
    }
}
