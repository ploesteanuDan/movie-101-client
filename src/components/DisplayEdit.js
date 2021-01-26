//PACKS
import React, { Component } from 'react'
import Axios from "axios"

//STYLE
import "../styles/DisplayEdit.css"

export default class DisplayEdit extends Component {

    handleApply(){
        let stateCopy = this.state
        let propsCopy = this.props
        let arr=[]
        let idName = propsCopy.type === "movies" ? "movieID" : propsCopy.type === "producers" ? "producerID" : "joinID"
        let idValue = propsCopy.type === "movies" ? propsCopy.entity.movieID : propsCopy.type ==="producers" ? propsCopy.entity.producerID : propsCopy.entity.joinID
       
        console.log(propsCopy.type)
        if(stateCopy !==null){
            Object.keys (stateCopy).forEach(function (item) {
                arr.push(item + "=" + `"${stateCopy[item]}"`)
            })
        }

        if(this.props.entity !== ""){
            Axios.put("http://localhost:3001/update", {stateCopy: stateCopy ,values: arr.join(", "), table: propsCopy.type, idName: idName, idValue: idValue})
            .then(()=>{
                alert("Done")
            })
            .catch((err)=>{
                alert(err)
            })
        }
        else if(this.props.entity === "")
        {
            Axios.post("http://localhost:3001/"+propsCopy.type, {stateCopy})
            .then(()=>{
                alert("Done")
            })
        }

    }

    handleChange = (event) =>
    {
        this.setState({[event.target.name]: event.target.value})
    }

    handleType(){
        if(this.props.type==="movies")
        {
            return(
                <div>
                    <div className="EditLabel">Title</div>
                    <input name="movieName" onChange={this.handleChange} placeholder={this.props.entity.movieName} className="EditInput"></input>
                    <div className="EditLabel">Year</div>
                    <input name="movieYear" onChange={this.handleChange} placeholder={this.props.entity.movieYear} className="EditInput"></input>
                    <div className="EditLabel">Type</div>
                    <input name="movieType" onChange={this.handleChange} placeholder={this.props.entity.movieType} className="EditInput"></input>
                    <div className="EditLabel">Plot</div>
                    <input name="moviePlot" onChange={this.handleChange} placeholder={this.props.entity.moviePlot} className="EditInput"></input>
                    <div className="EditLabel">Thumbnail</div>
                    <input name="movieThumbnail" onChange={this.handleChange} placeholder={this.props.entity.movieThumbnail} className="EditInput"></input>
                    <div className="EditLabel">Trailer</div>
                    <input name="movieTrailer" onChange={this.handleChange} placeholder={this.props.entity.movieTrailer} className="EditInput"></input>
                    <div className="EditLabel">Banner</div>
                    <input name="movieBanner" onChange={this.handleChange} placeholder={this.props.entity.movieBanner} className="EditInput"></input>
                    <div className="EditLabel">Set Banner</div>
                    <input name="isBanner" onChange={this.handleChange} placeholder={this.props.entity.isBanner} className="EditInput"></input>
                </div>   
            )
        }
        else if(this.props.type==="producers")
        {
            return(
                <div>
                    <div className="EditLabel">Name</div>
                    <input name="producerName" onChange={this.handleChange} placeholder={this.props.entity.producerName} className="EditInput"></input>
                    <div className="EditLabel">Born</div>
                    <input name="producerBorn" onChange={this.handleChange} placeholder={this.props.entity.producerBorn} className="EditInput"></input>
                    <div className="EditLabel">Nationality</div>
                    <input name="producerNationality" onChange={this.handleChange} placeholder={this.props.entity.producerNationality} className="EditInput"></input>
                    <div className="EditLabel">Quote</div>
                    <input name="producerQuote" onChange={this.handleChange} placeholder={this.props.entity.producerQuote} className="EditInput"></input>
                    <div className="EditLabel">Thumbnail</div>
                    <input name="producerThumbnail" onChange={this.handleChange} placeholder={this.props.entity.producerThumbnail} className="EditInput"></input>
                </div>   
            )
        }
        else if(this.props.type==="jointable")
        {
            return(
                <div>
                    <div className="EditLabel">Movie ID</div>
                    <input type="number" name="movieID" onChange={this.handleChange} placeholder={this.props.entity.movieID} className="EditInput"></input>
                    <div className="EditLabel">Producer ID</div>
                    <input type="number" name="producerID" onChange={this.handleChange} placeholder={this.props.entity.producerID} className="EditInput"></input>
                    <div className="EditLabel">Studio ID</div>
                    <input type="number" name="studioID" onChange={this.handleChange} placeholder={this.props.entity.studioID} className="EditInput"></input>
                </div>   
            )
        }
    }

    render() {
        return (
            <div className="DisplayEditContainer">
                <button onClick={()=>{this.props.handleDiscardButton()}} className="DiscardButton">Discard</button>
                <div className="DisplayEdit">
                    <text className="EditTitle">Edit desidered fields</text>
                    <div className="List" style={{textAlign: "left"}}>
                       {this.handleType()} 
                    </div>
                </div> 
                <button onClick={()=>{this.handleApply(); this.props.handleDiscardButton()}} className="ApplyButton">Apply</button>
            </div>
        )
    }
}
