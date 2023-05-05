import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (name) {
      dispatch(getName(name));
    }
  }, [name, dispatch]);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getName(name));
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" value={name} onChange={handleInputChange} />
      <button type="submit">Search</button>
      {pokemons &&
        pokemons.name &&
        <div>
          <h3>{pokemons.name}</h3>
          <img src={pokemons.img} alt={pokemons.name} />
        </div>
      }
    </form>
  );
};

export default SearchBar;
