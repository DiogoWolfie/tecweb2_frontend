//import logo from './logo.svg';
import './App.css';
import Note from "./Components/Note";
import axios from "axios";
import { useState } from 'react';

function App() {

  const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: {
      query: 'italian wedding soup'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '06031a0fb0msh7f4cf03e4978368p1cb906jsna927bcef7972',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };

  
  axios.request(options)
  .then((res) => console.log(res));
  

  const [notes, setNotes]= useState([]); 
  axios.request(options).then((res) => setNotes(res.data));

  console.log(notes);

  
  return (
    <div className="App">
      {notes.map((note) => (
        <Note key = {`note__${note.id}`} title = {note.title}>{note.content}</Note>
      ))}  
    </div>
  );
}

export default App;
