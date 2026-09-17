import { useState } from "react";
import "./App.css";

const pokemons = [
  {
    id: 25,
    nome: "Pikachu",
    tipo: "Elétrico",
    cor: "#FFD633",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
  },
  {
    id: 1,
    nome: "Bulbasaur",
    tipo: "Planta",
    cor: "#7CFC00",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 4,
    nome: "Charmander",
    tipo: "Fogo",
    cor: "#FF9E9E",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },
  {
    id: 7,
    nome: "Squirtle",
    tipo: "Água",
    cor: "#8CC4FF",
    imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
  },
];

export default function Home() {

  const [pesquisa, setPesquisa] = useState("");

  const lista = pokemons.filter((pokemon) =>
    pokemon.nome.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <div>

      <header className="header">

        <h2>Pokédex</h2>

        <nav>
          <a>Lar</a>
          <a>Pokémons</a>
          <a>Tipos</a>
        </nav>

      </header>

      <div className="search">

        <input
          placeholder="Pesquisar Pokémon..."
          onChange={(e)=>setPesquisa(e.target.value)}
        />

        <button>Buscar</button>

      </div>

      <div className="cards">

        {lista.map((pokemon)=>(

          <div
            className="card"
            key={pokemon.id}
            style={{background:pokemon.cor}}
          >

            <img src={pokemon.imagem}/>

            <h2>{pokemon.nome}</h2>

            <span>{pokemon.tipo}</span>

          </div>

        ))}

      </div>

    </div>
  );
}