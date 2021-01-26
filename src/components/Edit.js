//PACKS
import React, { Component } from 'react'
import Axios from "axios"

//STYLE
import "../styles/Edit.css"

//COMPONENTS
import DsiplayList from "./DsiplayList"


export default class Edit extends Component {

    state={
        chosen: "",
        list: ""
    }

    componentDidMount(){
        Axios.get("http://localhost:3001/movies")
        .then(resp=>{
            this.setState({list: resp.data, chosen:"movies"})
        })
    }

    getList(chosen){
        if(chosen!=="")
        Axios.get("http://localhost:3001/"+chosen)
        .then(resp=>{
            this.setState({list: resp.data, chosen:chosen})
        })
        else{
            this.setState({list:"", chosen:""})
        }
    }

    handleChosen(list, chosen){
        if(this.state.list!=="")
        {
            return  <DsiplayList list={list} type={chosen}/>
        }
    }

    render() {
        return (
            <div>
                <div className="EditSidebar">
                    {/* <text className="EditTitle">Choose table</text> */}
                    <button onClick={()=>{this.getList("jointable")}} style={{right: "27.5vw"}} className="EditButton">Edit relations</button>
                    <button onClick={()=>{this.getList("movies")}} style={{right: "20vw"}} className="EditButton">Edit movies</button>
                    <button onClick={()=>{this.getList("producers")}} className="EditButton">Edit producers</button>
                </div>
            {this.handleChosen(this.state.list, this.state.chosen)}
            </div>
        )
    }
}
