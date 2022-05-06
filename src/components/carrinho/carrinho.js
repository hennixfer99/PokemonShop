import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Remover} from "../../store/modules/action"
import "./carrinho.css"
function Carrinho(){
    
    const carrinho = useSelector((state) => state.carrinhoReducer)
    const setRedux = useDispatch()
    const Totalprice = carrinho.reduce(
        (soma1, soma2) => soma1 + Number(soma2.price),
        0
      );
    
   
return (
<>

    
       {carrinho.length ? (
       <div className="div-carrinho">
       <h2>Carrinho</h2>
       <ul className="base-carrinho">
        {carrinho.map((item,index) => (
           
            <li key={index} className="carrinho">
                <img src={item.img}/>
                <h1>{item.name}</h1>
                <p>R$ {item.price.toFixed(2)}</p>
                <button className="tirardocarrinho" onClick={() => setRedux(Remover(item))}>X</button>
            </li>))}
            </ul>
            <p className="precofinal">Valor total:R$ {Totalprice.toFixed(2)}</p>
            <button className= "finalizar-compra"  >Finalizar compra</button>
            </div>
        
        ):(
            
            <div className="div-carrinhovazio">
            <h1 className="carrinho-vazio">Acrescente algo ao carrinho</h1>
            </div>
            
        )}

    
    
</>

)
}

export default Carrinho