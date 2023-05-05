import React from "react";

function Sorter({ data, setData }) {
  const handleSort = (e) => {
    const value = e.target.value;
    const sortedData = [...data].sort((a, b) => {
      if (value === "name_asc") {
        return a.name.localeCompare(b.name);
      } else if (value === "name_desc") {
        return b.name.localeCompare(a.name);
      } else if (value === "attack_asc") {
        return a.ataque - b.ataque;
      } else if (value === "attack_desc") {
        return b.ataque - a.ataque;
      } else {
        return null;
      }
    });
    setData(sortedData);
  };

  return (
    <div>
      <label htmlFor="sort-by">Ordenar por:</label>
      <select id="sort-by" onChange={handleSort}>
        <option value="">Selecciona una opción</option>
        <option value="name_asc">Nombre (A-Z)</option>
        <option value="name_desc">Nombre (Z-A)</option>
        <option value="attack_asc">Ataque (menor a mayor)</option>
        <option value="attack_desc">Ataque (mayor a menor)</option>
      </select>
    </div>
  );
}

export default Sorter;
