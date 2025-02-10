import React from "react";
import "./Page1.css";
import ListagemPoke from "../../components/pokemons/pokemons";
import { useState } from "react";
import { itens } from "../../info/itens-disponiveis";
import Carrinho from "../../components/carrinho/carrinho";
import Particle from "../../components/particles/particles";

function Homepage() {
    const [filteredProducts, setFilteredProducts] = useState([]);

    function filtragem(category) {
        const buscando = itens.filter((item) => {
            return item.category === category;
        });
        setFilteredProducts(buscando);
    }

    function filtroTodos() {
        setFilteredProducts([]);
    }

    return (
        <>
            <Particle />

            <div className="site-body">
                <div className="logo-description">
                    <h1 className="titulo">Loja Vip</h1>
                    <p className="titulo2">
                        Atingindo R$25,00 em Doações, você ganhará o rank de
                        Vip. Vip's recebem kit semanal, comando exclusivos, tag,
                        particulas, extra /sethome e vaga garantida caso o
                        server esteja lotado!
                    </p>
                    <h2 className="titulo3">
                        {" "}
                        Todos os Ranks são Vitalícios ! Não expiram !
                    </h2>
                </div>

                <main className="mainpage">
                    <div className="pagseguro">
                        <figure>
                            <img
                                src="https://www.internetinnovation.com.br/wp-content/uploads/2016/09/PagSeguro.png"
                                alt="Imagem logo pagseguro"
                            />
                        </figure>
                        <p>Clique aqui para acessar com Pagseguro</p>
                    </div>
                    <p>
                        Nossas Lojas de doações são completamente confiáveis e
                        seguras. Já atendidos mais de 15,000 pedidos ao longo de
                        7 anos!
                    </p>
                    <div className="buttonsFiltro">
                        <button onClick={() => filtroTodos()}>Todos</button>
                        <button onClick={() => filtragem("pokemon")}>
                            Pokemons
                        </button>
                        <button onClick={() => filtragem("item")}>Itens</button>
                        <button onClick={() => filtragem("bau")}>Baús</button>
                        <button onClick={() => filtragem("boost")}>Boosts</button>
                    </div>
                    <div className="itens-loja">
                        {filteredProducts.length > 0 ? (
                            <ul className="ulprimaria">
                                <ListagemPoke itens={filteredProducts} />
                            </ul>
                        ) : (
                            <ul className="ulprimaria">
                                <ListagemPoke itens={itens} />
                            </ul>
                        )}
                    </div>
                </main>
                <Carrinho />
            </div>
        </>
    );
}
export default Homepage;
