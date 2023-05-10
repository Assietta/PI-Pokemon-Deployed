import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getName, getPokemons } from "../../redux/actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    if (name) {
      dispatch(getName(name));
    } else {
      dispatch(getPokemons());
    }
  }, [name, dispatch]);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (!/^\d+$/.test(inputValue)) {
      setName(inputValue);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getName(name));
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <input className={styles.input} type="text" value={name} onChange={handleInputChange} placeholder="Search Pokemon..." />
      {pokemons && pokemons.name &&
        <div className={styles.result}>
          <h3>{pokemons.name}</h3>
          <img className={styles.image} src={pokemons.img} alt={pokemons.name} />
        </div>
      }
    </form>
  );
};

export default SearchBar;
