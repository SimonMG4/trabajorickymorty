import React, { useState, useEffect } from 'react';
import CharacterList from './components/characterList';
import Filters from './components/filters';
import './index.css';
  
const App = () => {
  //Las constantes donde almacenamos lo traido de la api 
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [filters, setFilters] = useState({ estado: '', genero: '', especie: '' });

  //Funcion para consumir la api
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      setCharacters(data.results);
      setFilteredCharacters(data.results);
    };

    fetchData();
  }, []);

  // Función para manejar los filtros
  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
    applyFilters({ ...filters, [filterType]: value });
  };

  // Aplicar filtros
  const applyFilters = (filters) => {
    let filtered = characters;
    if (filters.status) {
      filtered = filtered.filter((char) => char.status === filters.status);
    }
    if (filters.gender) {
      filtered = filtered.filter((char) => char.gender === filters.gender);
    }
    if (filters.species) {
      filtered = filtered.filter((char) => char.species === filters.species);
    }
    setFilteredCharacters(filtered);
  };

  return (
    <div className="app">
      <h1>Personajes Rick And Morty</h1>
      <Filters onFilterChange={handleFilterChange} />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default App;