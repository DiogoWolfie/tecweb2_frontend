//parte responsável pela pesquisa na api de receita


import React from "react";
import './index.css';


export default function Search(props){
    const Atualiza = (event)=>{
      props.setTitulo(event.target.value);
    };
    return(
        <main class = "container">

        <form class="form-card" onSubmit={props.carrega_receita}>
            <input
            class="form-card-title"
            type="text"
            name="titulo"
            placeholder="Nome da receita..."
            onChange={Atualiza}
            value = {props.titulo}
            />
            <button class="btn" type = 'submit'>Pesquisar</button>
        </form>
        </main>
    );
  }
