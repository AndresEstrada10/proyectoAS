import React from 'react';

const Filtros = ({ filtros, setFiltros }) => {
  return (
    <div className="filtros">
      <select
        value={filtros.plataforma}
        onChange={(e) => setFiltros({ ...filtros, plataforma: e.target.value })}
      >
        <option value="">Plataforma</option>
        <option value="PC">PC</option>
        <option value="PS5">PS5</option>
        <option value="Xbox">Xbox</option>
        <option value="Switch">Switch</option>
      </select>

      <select
        value={filtros.genero}
        onChange={(e) => setFiltros({ ...filtros, genero: e.target.value })}
      >
        <option value="">Género</option>
        <option value="Acción">Acción</option>
        <option value="Aventura">Aventura</option>
        <option value="RPG">RPG</option>
        <option value="Deportes">Deportes</option>
      </select>

      <select
        value={filtros.orden}
        onChange={(e) => setFiltros({ ...filtros, orden: e.target.value })}
      >
        <option value="">Ordenar por</option>
        <option value="precio-asc">Precio (ascendente)</option>
        <option value="precio-desc">Precio (descendente)</option>
        <option value="fecha-asc">Fecha (más antiguo)</option>
        <option value="fecha-desc">Fecha (más reciente)</option>
      </select>
    </div>
  );
};

export default Filtros;
