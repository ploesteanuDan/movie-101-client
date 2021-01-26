//PACKS
import React, { Component } from 'react'
import YouTube from 'react-youtube'
import {Spring} from 'react-spring/renderprops'


//STYLE
import "../styles/DisplayInfo.css"


export default class DisplayInfo extends Component {
      
    backButton(){
        this.props.getDisplayItem("","")
    }

    movieDetails(field){
        let list = []
        if(this.props.itemDetails!=="") 
        for(let i = 0; i < this.props.itemDetails.length; i++){
            if(!list.includes(this.props.itemDetails[i][field]))
            list.push(this.props.itemDetails[i][field])
        }
        return(
            //  list.map((detail)=> <text>{(detail + ", ")}</text>)
            list.join(", ")
        )
    }

    producerDetails(){
        if(this.props.itemDetails!=="")
        return(
            <div className="CreatedListContainer">
                {
                this.props.itemDetails.map((detail)=>
                <li className="CreatedList">
                    <div style={{width: "30%"}} className="Field">
                        {detail.movieName}
                    </div>
                    <div className="Field">
                        {detail.movieYear}
                    </div>
                    <div className="Field">
                        {detail.movieType}
                    </div>
                    <div className="Field">
                        {detail.studioName}
                    </div>
                </li>
                )
                }
            </div>
        )
    }

    render() {
        const opts = {
            height: window.innerWidth *0.20,
            width: window.innerWidth *0.35,
            playerVars: {
              controls: 1,
              disablekb: 1,
              loop: 0,
              modestbranding: 0,
              fs:0,

            },
          };
          
        return (
            <div className="DisplayInfoBg" style={{display: this.props.item ? "block" : "none"}}>
                <Spring
                from={{  
                }}
                to={{ 
                    opacity: this.props.type !== "" ? 1 : 0,
                    transform: this.props.type !== "" ? "translatey(0)" : "translatey(5vh)" 
                }}
                >
                {props => 
                    <div style={props}>    
                        <button className="BackButton" onClick={()=>{this.backButton()}}>Back</button>
                          <div style={{height: this.props.type == "movie" ? "80vh" : "60vh"}} className="DisplayInfoContainer">
                          <div style={{display: this.props.item.producerBorn ? "block" : "none"}}>
                            <img src={"https://i.imgur.com/"+this.props.item.producerThumbnail} alt="thumbnail" className="Thumbnail"/>
                            <text className="Title">{this.props.item.producerName}</text>
                            <div className="Created">
                            <text className="CreatedTitle">Producer of</text>
                            {this.producerDetails()}

                            </div>
                            <text className="Year" style={{top: "26vw"}}>{parseInt(2020 - this.props.item.producerBorn)} years old</text>
                            <text className="Year">Born in {this.props.item.producerNationality}</text>
                            <text className="Plot">"Quote placeholder{this.props.item.producerQuote}"</text>
                          </div>
                          <div style={{display: this.props.item.movieYear ? "block" : "none"}}>
                            <img src={"https://i.imgur.com/"+this.props.item.movieThumbnail} alt="thumbnail" className="Thumbnail"/>
                            <text className="Title">{this.props.item.movieName}</text>
                              <YouTube
                                  videoId={this.props.item.movieTrailer}
                                  className="Trailer" 
                                  opts={opts}                 // defaults -> null
                              
                              />
                            <text className="Plot">"{this.props.item.moviePlot}"</text>
                            <div className="DetailsContainer">
                                <text className="Type">{this.props.item.movieType}</text>
                                <text className="Year">{this.props.item.movieYear}</text>
                                <text className="Produced">Produced by {this.movieDetails("producerName")}</text>
                                <text className="Produced" style={{top: "28vw"}}>Available on {this.movieDetails("studioName")}</text>
                            </div>
                           
                          </div>
                      </div> 
                    </div>}
            </Spring>
        </div> 
        )
    }
}
