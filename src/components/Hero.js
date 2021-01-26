import React, { Component } from 'react'
import Axios from 'axios'
import YouTube from 'react-youtube'
import "../styles/Movies.css"
import "../styles/Hero.css"
export default class Hero extends Component {

  state={
   banner: ""
}

  getMovies() {
    Axios.get('http://localhost:3001/movies', {params: {isBanner: 0}})
    .then(
        (res)=>{
            this.setState({banner: res.data[0]})
        }
    )
        
}

componentDidMount(){
    this.getMovies()
}

    render() {
        const opts = {
            height: window.innerWidth *0.60,
            width: window.innerWidth *0.81,
            playerVars: {
              autoplay: 1,
              controls: 0,
              disablekb: 1,
              loop: 1,
              modestbranding: 1,
              fs:0,

            },
          };
        return (
          <div>
            <div className="BgContainer">
            <img src={"https:/i.imgur.com/" + this.state.banner.movieBanner} className="BannerBackground"/>
            <div className="BgBottomShadow"></div>
            </div>
            <div className="HeroContainer">
               <YouTube
                    videoId={this.state.banner.movieTrailer}
                    className="Hero" 
                    opts={opts}                 // defaults -> null
                   
                />
                <div className="HeroTitle">
                    <text className="HeroTitleText">{this.state.banner.movieName}</text>
                    <button className="Discover" onClick={()=>{this.props.getDisplayItem(this.state.banner)}}>Discover</button>
                </div>
            </div>
          </div>
        )
    }
}
