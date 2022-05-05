import React from "react";
import "./pokemons.css"
const poke = [
  {
    img: "https://s3.amazonaws.com/files.enjin.com/718027/modules/shopping/22843432-161686688561b10b286a68b8.02511289.png",
    name: "MEWTWO",
    price: 41.93,
  },
  {
    img: "https://s3.amazonaws.com/files.enjin.com/718027/modules/shopping/22843432-207455856961b10b1a23fc77.41471779.png",
    name: "GIRATINA",
    price: 41.93,
  },
  {
    img: "https://s3.amazonaws.com/files.enjin.com/718027/modules/shopping/22843432-59009105061b10b09bc9922.36392179.png",
    name: "ARCEUS",
    price: 41.93,
  },
  {
    img: "https://s3.amazonaws.com/files.enjin.com/718027/modules/shopping/22843432-77025717961b12a982026d0.73896999.png",
    name: "URSHIFU",
    price: 34.93,
  },
  {
    img: "https://s3.amazonaws.com/files.enjin.com/718027/modules/shopping/22843432-56820029161b12adcc5d6e5.86908471.png",
    name: "ZERAORA",
    price: 31.43,
  },
];

const ListagemPoke = () => {
 return( poke.map((item) => {
    return (
      <>
        <li key={item.name}>
          <img src={item.img}/>
          <h1>{item.name}</h1>
          <button className="buttonadd">Adicionar</button>
          <p>R$ {item.price}</p>
        </li>
      </>
    );
  })
 )
};

export default ListagemPoke;
