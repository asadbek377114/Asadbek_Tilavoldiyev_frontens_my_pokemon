import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonFilter, setPokemonFilter] = useState([]);

  useEffect(() => {
    const pokeData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
        setPokemons(response.data.results);
        setPokemonFilter(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    pokeData();
  }, []);

  const search = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);
    const filtered = pokemons.filter((pokemon) => pokemon.name.includes(search));
    setPokemonFilter(filtered);
  };

  return (
    <div className="navbar">
      <h1>Pokedragons</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={searchTerm}
          onChange={search}
        />
      </div>
      <div className="pokemon-list">
        {pokemonFilter.map((pokemon, index) => (
          <div className="pokemon-card" key={index}>
            <Link to={`/pokemon/${index + 1}`}>
              <h2>{pokemon.name}</h2>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
                alt={pokemon.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
