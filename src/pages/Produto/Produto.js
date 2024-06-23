import React from "react"; 
import styles from "./Produto.module.css"; 
import { useState, useEffect } from "react"; 

const Produto = () => { 
  return ( 
    <div> 
      <h1>Cadastre-se para postar</h1> 
      <form> 
        <label> 
            <span> 
            Nome Produto: 
            </span> 
            <input type="text" name="displayName" required placeholder="Nome Produto" /> 
        </label> 
        <label> 
            <span> 
                Tipo: 
            </span> 
            <input type="text" name="displayName" required placeholder="Tipo" /> 
        </label> 
        <label> 
            <span> 
            Marca: 
            </span> 
            <input type="text" name="displayName" required placeholder="Marca" /> 
        </label> 
        <label> 
            <span> 
            Preço: 
            </span> 
            <input type="number" name="displayName" required placeholder="Preço" /> 
        </label> 
        <button className="btn"> 
            Cadastrar 
        </button> 
      </form> 
    </div> 
  ); 
}; 

export default Produto; 