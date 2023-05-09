import React from "react";
import "./index.css";
import axios from "axios";


export default function Note(props){


    const options={
        method: "POST",
        url: "http://127.0.0.1:8000/api/receitas/",
        data:{
            receitas: props.title
        } 
    }

    function favoritar(){
    
        axios.request(options).then((res) => {
            console.log(res)
    });

    };
    return(
       
        
        <div className = "card">
            <h3 className="card-title">{props.title}</h3>
            <div className = "card-content">
                {props.children}
            </div>
            
            <button className="bt" onClick={favoritar}>
                Salvar
            </button>

        </div>
        
    );
}


