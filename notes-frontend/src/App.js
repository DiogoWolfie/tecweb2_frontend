//import logo from './logo.svg';
import './App.css';
import Note from "./Components/Note";
import './Components/Note/index.css';
import axios from "axios";
import { useEffect, useState } from "react";
import Search from "./Components_Search/Search.js"
import Button from './Component_Button/Button.js'; 




function App() {

  const [exercicios, setExercicios]= useState([]);  //dicionário com o headline, url e img
  const [usuario,setUsuario] = useState([]); //meus emais de usuário
  
  const [titulo, setTitulo] = useState('');

const url = "https://tecweb-js.insper-comp.com.br/token" //token para os exercícios
const url2 = "https://tecweb-js.insper-comp.com.br/exercicio" //exercicios
    
async function getToken(url){
  let dic = { headers:{
    "Content-Type": "application/json",
    "Accept": "application/json"
    } 
  };
  const token = await axios.post(url, {username: "diogopl1"}, dic)
  console.log(token) //fazendo o cansole do token obtido

  //se der tudo certo, me devolve o token
  if(token.status === 200){
    return token.data.accessToken;
  }
  //se não, escreve o estado do token no console
  else{
    console.log(token.status)
}
}
    
    
async function Exercicio(url2){
    const t = await getToken(url)
    
    let dic2 = { headers: {"Content-Type": "application/json", 
    "Accept": "application/json",
    "Authorization": `Bearer ${t}`} 
    }; 
    
    
    axios
    .get(url2, dic2)
    .then((response)=> {
      console.log(response.data)//devolvendo a lista de exercício
      setExercicios(response.data)
      setUsuario(response.data["nome-do-usuario"].entrada.email)
      console.log(usuario)
    })
   
    
  }

  useEffect(()=>{
    Exercicio(url2)
  }, [])


  

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
      <p>
        {usuario}
      </p>
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
