import './App.css';
import {useState} from "react"
import Axios from 'axios'

function App() {

  const [title, setTitle] = useState("")
  const [year, setYear] = useState(0)
  const [type, setType] = useState("")
  const [plot, setPlot] = useState("")

  const [name, setName] = useState("")
  const [born, setBorn] = useState(0)
  const [nationality, setNationality] = useState("")
  
  const get = (table) => {
    Axios.get('http://localhost:3001/movie', {table: table}, {"Content-Type": "application/json"})
    .then(
      (res)=>{
        console.log(res.data)
      }
    )
  }

  const vari = "movies"
  function gettem(vari){
    console.log(vari)
    Axios.get('http://localhost:3001/movie', {table: vari}, {"Content-Type" : "application/json"})
    .then(
      ()=>{
        console.log("running")
      }
    )
 
  }
  gettem(vari)

  const addMovie = () => {
    Axios.post('http://localhost:3001/add/movie', {title: title, year: year, type: type, plot: plot}, {"Content-Type" : "application/json"})
    .then(
      ()=>{console.log("success")})
  }
  const addProducer = () => {
    Axios.post('http://localhost:3001/add/producer', {name: name, born: born, nationality: nationality}, {"Content-Type" : "application/json"})
    .then(
      ()=>{console.log("success")})
  }

  const updateMovie = () => {
    Axios.put('http://localhost:3001/update/movie', {id: 1, field: "movieTitle", value: "Seipsiftar"})
    .then(
      (response) => {
        alert("update")
      })
  }



  return (
    <div className="App">
      <div className="inputContainer">
        <label>Title:</label>
        <input onChange={(event)=>{setTitle(event.target.value)}}/>
        <label>Year:</label>
        <input onChange={(event)=>{setYear(event.target.value)}}/>
        <label>Type:</label>
        <input onChange={(event)=>{setType(event.target.value)}}/>
        <label>Plot:</label>
        <input onChange={(event)=>{setPlot(event.target.value)}}/>
      </div>
      <button onClick={addMovie}>Add movie</button>
      {/* <button onClick={getMovies}>Getz</button>
      <button onClick={updateMovie}>Update one</button>
      <button onClick={deleteMovie}>Delete one</button> */}
      <div className="inputContainer">
      <label>Name:</label>
      <input onChange={(event)=>{setName(event.target.value)}}/>
      <label>Born:</label>
      <input onChange={(event)=>{setBorn(event.target.value)}}/>
      <label>Nationality:</label>
      <input onChange={(event)=>{setNationality(event.target.value)}}/>
      </div>
      <button onClick={addProducer}>Add producer</button>
      {/* <button onClick={gettem()}>Get</button> */}
    </div>
  );
}

export default App;
