import React from "react";
import "./card.css"
import {Adicionar} from "../../store/modules/action"
import { useDispatch } from "react-redux";

function ListagemPoke({itens}){ 

  const setRedux = useDispatch();

 return( itens.map((item) => {
    return (
      <>
        <li className="produtos" key={item.name}>
          <img src={item.img} alt ={`um pokemon ou item chamado ${item.name}`}/>
          <h1>{item.name}</h1>
          <button className="buttonadd" onClick={() => setRedux(Adicionar(item))}>Adicionar</button>
          <p>R$ {item.price.toFixed(2)}</p>
        </li>
      </>
    );
  })
 )
};

export default ListagemPoke;
