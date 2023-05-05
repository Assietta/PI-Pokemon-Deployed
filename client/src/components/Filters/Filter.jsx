import { getTypes } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Filter = ({ setFilters }) => {
    const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const [input, setInput] = useState({
    tipos: [],
    origen: "",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleTypeChange = (e) => {
    const type = e.target.value;
    const checked = e.target.checked;

    setInput((prevInput) => ({
      ...prevInput,
      tipos: checked
        ? [...prevInput.tipos, type]
        : prevInput.tipos.filter((t) => t !== type),
    }));
  };

  const handleOrigenChange = (e) => {
    const origen = e.target.value;
    setInput((prevInput) => ({
      ...prevInput,
      origen: origen,
    }));
  };

  const applyFilters = () => {
    setFilters(input);
  };

  const clearFilters = () => {
    setInput({ tipos: [], origen: "" });
    setFilters({ tipos: [], origen: "" });
  };

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <label>
          <input
            type="radio"
            name="origen"
            value="API"
            checked={input.origen === "API"}
            onChange={handleOrigenChange}
          />
          API
        </label>
        <label>
          <input
            type="radio"
            name="origen"
            value="Database"
            checked={input.origen === "Database"}
            onChange={handleOrigenChange}
          />
          Database
        </label>
      </div>
      <div>
        {types.map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              name="type"
              value={type}
              checked={input.tipos.includes(type)}
              onChange={handleTypeChange}
            />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </label>
        ))}
      </div>
      <div>
        <button onClick={applyFilters}>Apply filters</button>
        <button onClick={clearFilters}>Clear filters</button>
      </div>
    </div>
  );
};

export default Filter;
