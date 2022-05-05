import React from "react";
import "./Page1.css"
import ListagemPoke from "../../components/pokemons/pokemons";


function Homepage() {
 console.log(ListagemPoke)
 
    return (
    <>
    <div className="site-body">
      <div className="logo-description">
        <figure className="miau">
          <img className="miauimg" src="https://s3.amazonaws.com/files.enjin.com/610350/container_headers/shop_links.png" />
        </figure>
        <h1>Loja Vip</h1>
        <p>
          Atingindo R$25,00 em Doações, você ganhará o rank de Vip. Vip's
          recebem kit semanal, comando exclusivos, tag, particulas, extra
          /sethome e vaga garantida caso o server esteja lotado! 
        </p>
        <h2> Todos os Ranks
          são Vitalícios ! Não expiram !</h2>
      </div>
      <main className="mainpage">
        <div className="pagseguro">
          <figure>
            <img src="https://www.internetinnovation.com.br/wp-content/uploads/2016/09/PagSeguro.png" />
          </figure>
          <p>Clique aqui para acessar com Pagseguro</p>
        </div>
        <p>
          Nossas Lojas de doações são completamente confiáveis e seguras. Já
          atendidos mais de 15,000 pedidos ao longo de 7 anos!
        </p>
        <div>
            <ul>
                <ListagemPoke />
            </ul>
        </div>
      </main>
      </div>
    </>
  );
}
export default Homepage;
