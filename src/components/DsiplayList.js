//PACKS
import React, { Component } from 'react'
import Axios from "axios"

//STYLE
import "../styles/DisplayList.css"

//COMPONENTS
import DisplayEdit from "./DisplayEdit"

export default class DsiplayList extends Component {

    state={
        entity:"",
        toggle: false
    }

    getListColor(id){
        return id%2===0 ? "#8198d4" : "aliceblue"
    }

    handleDiscardButton(){
        this.setState({toggle: false, entity:""})
    }

    handleEditButton(){
        return this.state.toggle ? <DisplayEdit entity={this.state.entity} handleDiscardButton={this.handleDiscardButton.bind(this)} type={this.props.type}/> : null
    }

    handleDeleteButton(item){
        let idName = this.props.type === "movies" ? "movieID" : this.props.type === "producers" ? "producerID" : "joinID"
        let idValue = this.props.type === "movies" ? item.movieID : this.props.type ==="producers" ? item.producerID : item.joinID
        Axios.delete("http://localhost:3001/delete", {data:{table: this.props.type, idValue: idValue, idName: idName}})
        .then((res)=>{
            alert(res.status)
        })
        .catch((err)=>{
            alert(err)
        })
    }

    mapList(){
        if(this.props.type==="movies")
       { return(
            <div>  
                   <div className="EditHeader">
                    <div style={{width: "2vw", marginRight: "1vw"}} className="Field">ID</div>
                    <div style={{width: "10vw", marginRight: "1vw"}} className="Field">Title</div>
                    <div style={{width: "4vw", marginRight: "1vw"}} className="Field">Year</div>
                    <div style={{width: "4vw", marginRight:"1vw"}} className="Field">Type</div>
                    <div style={{width: "25%", marginRight:"3vw"}} className="Field">Plot</div>
                    <div style={{width: "8vw", marginRight:"1vw"}} className="Field">Thumbnail</div>
                    <div style={{width: "9vw", marginRight:"0.5vw"}} className="Field">Trailer</div>
                    <div style={{width: "8vw", marginRight:"0.5vw"}} className="Field">Banner</div>
                    <div style={{width: "4vw", marginRight:"1vw"}} className="Field">Set</div>
                   </div>
                {this.props.list.map(item=>
                <li style={{color: this.getListColor(item.movieID), backgroundImage:  `linear-gradient(-90deg, rgba(24,24,24,1) 25%, rgba(24,24,24,0.9176851160386029) 54%, rgba(24,24,24,0.7412145278033089) 75%, rgba(24,24,24,0.4975170488117122) 95%),url(https://i.imgur.com/${item.movieThumbnail})`}} key={item.movieID} className="EditList">
                    <div style={{width: "2vw", marginRight: "1vw", fontWeight: "bold"}} className="Field">{item.movieID}</div>
                    <div style={{width: "10vw", marginRight: "1vw", fontWeight: "bold"}} className="Field">{item.movieName}</div>
                    <div style={{width: "4vw", marginRight: "1vw"}} className="Field">{item.movieYear}</div>
                    <div style={{width: "4vw", marginRight:"1vw"}} className="Field">{item.movieType}</div>
                    <div style={{width: "25%", marginRight:"1vw"}} className="Field">{item.moviePlot}</div>
                    <div style={{width: "8vw", marginRight:"1vw"}} className="Field">{item.movieThumbnail}</div>
                    <div style={{width: "9vw", marginRight:"0.5vw"}} className="Field">{item.movieTrailer}</div>
                    <div style={{width: "8vw", marginRight:"0.5vw"}} className="Field">{item.movieBanner}</div>
                    <div style={{width: "3vw", marginRight:"1.5vw", color: item.isBanner ? "" : "rgb(180, 30, 80)"}} className="Field">{item.isBanner===0 ? "True" : "False"}</div>
                    <button onClick={()=>{this.setState({toggle: true, entity: item})}} style={{backgroundColor: this.getListColor(item.movieID)}} className="EditEntityButton">Edit</button>
                    <button className="DeleteEntityButton" onClick={()=>{this.handleDeleteButton(item)}}>Delete</button>
                </li>
                )}</div>
       ) 
    }
        else if(this.props.type==="producers")
        {return(
            <div>
                <div className="EditHeader">
                    <div style={{width: "2vw", marginRight: "1vw"}} className="EditField">ID</div>
                    <div style={{width: "12vw", marginRight: "1vw"}} className="EditField">Title</div>
                    <div style={{width: "3vw", marginRight: "1vw"}} className="EditField">Year</div>
                    <div style={{width: "5vw", marginRight:"1vw"}} className="EditField">Nationality</div>
                    <div style={{width: "42.5vw", marginRight:"2vw"}} className="EditField">Quote</div>
                    <div style={{width: "8vw", marginRight:"1vw"}} className="EditField">Thumbnail</div>
                </div>
                {this.props.list.map(item=>
                <li style={{color: this.getListColor(item.producerID), backgroundImage:  `linear-gradient(-90deg, rgba(24,24,24,1) 25%, rgba(24,24,24,0.9176851160386029) 54%, rgba(24,24,24,0.7412145278033089) 75%, rgba(24,24,24,0.4975170488117122) 95%),url(https://i.imgur.com/${item.producerThumbnail})`}} key={item.producerID} className="EditList">
                    <div style={{width: "2vw", marginRight: "1vw"}} className="EditField">{item.producerID}</div>
                    <div style={{width: "12vw", marginRight: "1vw"}} className="EditField">{item.producerName}</div>
                    <div style={{width: "3vw", marginRight: "1vw"}} className="EditField">{2020 - item.producerBorn}</div>
                    <div style={{width: "5vw", marginRight: "1vw"}} className="EditField">{item.producerNationality}</div>
                    <div style={{width: "42.5vw", marginRight: "2vw"}} className="EditField">{item.producerQuote}shadkdashdsahdhskajhdjksahdskajhdskahdksahdksahdkjsahdskajhdskahdsakj</div>
                    <div style={{width: "8vw", marginRight: "0.5vw"}} className="EditField">{item.producerThumbnail}</div>
                    <button onClick={()=>{this.setState({toggle: true, entity: item})}} style={{backgroundColor: this.getListColor(item.producerID)}} className="EditEntityButton">Edit</button>
                    <button className="DeleteEntityButton" onClick={()=>{this.handleDeleteButton(item)}}>Delete</button>
                </li>
                )}</div>
        )}
        else if(this.props.type==="jointable")
        {return(
            <div>
                <div className="EditHeader">
                    <div style={{width: "3vw", marginRight: "3vw"}} className="EditField">ID</div>
                    <div style={{width: "8vw", marginRight: "3vw"}} className="EditField">Movie ID</div>
                    <div style={{width: "10vw", marginRight: "3vw"}} className="EditField">Movie Title</div>
                    <div style={{width: "6vw", marginRight:"3vw"}} className="EditField">Producer ID</div>
                    <div style={{width: "10vw", marginRight:"3vw"}} className="EditField">Producer Name</div>
                    <div style={{width: "8vw", marginRight:"3vw"}} className="EditField">Studio ID</div>
                    <div style={{width: "8vw", marginRight:"5vw"}} className="EditField">Studio Name</div>
                </div>
                {this.props.list.map(item=>
                    <li style={{color: this.getListColor(item.joinID), backgroundImage:  `linear-gradient(-90deg, rgba(24,24,24,1) 25%, rgba(24,24,24,0.9176851160386029) 54%, rgba(24,24,24,0.7412145278033089) 75%, rgba(24,24,24,0.4975170488117122) 95%),url(https://i.imgur.com/${item.movieThumbnail})`}} key={item.joinID} className="EditList">
                    <div style={{width: "3vw", marginRight: "3vw", fontWeight: "bold"}} className="EditField">{item.joinID}</div>
                    <div style={{width: "8vw", marginRight: "3vw"}} className="EditField">{item.movieID}</div>
                    <div style={{width: "10vw", marginRight: "3vw"}} className="EditField">{item.movieName}</div>
                    <div style={{width: "6vw", marginRight: "3vw"}} className="EditField">{item.producerID}</div>
                    <div style={{width: "10vw", marginRight: "3vw"}} className="EditField">{item.producerName}</div>
                    <div style={{width: "8vw", marginRight: "3vw"}} className="EditField">{item.studioID}</div>
                    <div style={{width: "8vw", marginRight: "8vw"}} className="EditField">{item.studioName}</div>
                    <button onClick={()=>{this.setState({toggle: true, entity: item})}} style={{backgroundColor: this.getListColor(item.producerID)}} className="EditEntityButton">Edit</button>
                    <button className="DeleteEntityButton" onClick={()=>{this.handleDeleteButton(item)}}>Delete</button>
                </li>
                )}
                </div>
        )}
    }

    render() {
        return (
            <div>
                <div className="DisplayListContainer">
                    {this.mapList()}
                </div>
                <button onClick={()=>{this.setState({toggle: true, entity: ""})}} className="AddEntityButton">Add</button>
                {this.handleEditButton()}
            </div>
        )
    }
}
