import React from 'react';

const Filters = ({ onFilterChange }) => {
  return (
    <div className="filters">
      <select onChange={(e) => onFilterChange('status', e.target.value)}>
        <option value="">Todos</option>
        <option value="Alive">Vivo</option>
        <option value="Dead">Muerto</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select onChange={(e) => onFilterChange('gender', e.target.value)}>
        <option value="">Todos</option>
        <option value="Male">Hombre</option>
        <option value="Female">Mujer</option>
        <option value="Genderless">Sin genero</option>
        <option value="unknown">Desconocido</option>
      </select>

      <select onChange={(e) => onFilterChange('species', e.target.value)}>
        <option value="">Todos</option>
        <option value="Human">Humano</option>
        <option value="Alien">Alien</option>
      </select>
    </div>
  );
};

export default Filters;