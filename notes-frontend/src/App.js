//import logo from './logo.svg';
import './App.css';
import Note from "./Components/Note";
import './Components/Note/index.css';
import axios from "axios";
import { useState } from 'react';
import Search from "./Components_Search/Search.js"
import Button from './Component_Button/Button.js'; 


function App() {

  

  // function Search(){
  //   const Atualiza = (event)=>{
  //     setTitulo(event.target.value);
  //   };
  //   return(
  //       <main class = "container">

  //       <form class="form-card" onSubmit={carrega_receita}>
  //           <input
  //           class="form-card-title"
  //           type="text"
  //           name="titulo"
  //           placeholder="Nome da receita..."
  //           onChange={Atualiza}
  //           value = {titulo}
  //           />
  //           <button class="btn" type = 'submit'>Pesquisar</button>
  //       </form>
  //       </main>
  //   );
  // }

  
  const [titulo, setTitulo] = useState('');

  const options = {
    method: 'GET',
    url: 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe',
    params: {
      query: titulo 
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '06031a0fb0msh7f4cf03e4978368p1cb906jsna927bcef7972',
      'X-RapidAPI-Host': 'recipe-by-api-ninjas.p.rapidapi.com'
    }
  };
  

  
  const [notes, setNotes]= useState([]); 
 
  const carrega_receita = (event) => {
    event.preventDefault();
    axios.request(options).then((res) => {
      setNotes(res.data)
      setTitulo("");
    
    });
  
    //console.log(notes);
  };
  

  
  return (
    
    <div>
      <Button />
    <div className="App">
      
      <Search carrega_receita={carrega_receita} titulo={titulo} setTitulo={setTitulo} />
      <div className = "block_card">
        {notes.map((note) => (
          <Note key = {`note__${note.id}`} title = {note.title}>{note.ingredients}</Note>
        ))} 
      </div>
       
    </div>
    </div>
    
  );
}

export default App;
