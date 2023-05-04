import style from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { postPokemon, getTypes } from '../../redux/actions';
import React, { useEffect, useState } from 'react';

const Form = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  const [input, setInput] = useState({
    name: '',
    imagen: '',
    vida: 0,
    ataque: 0,
    defensa: 0,
    velocidad: 0,
    altura: 0,
    peso: 0,
    type: [],
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, imagen, vida, ataque, defensa, velocidad, altura, peso, type } = input;
    const pokemonData = {
      name,
      imagen,
      vida,
      ataque,
      defensa,
      velocidad,
      altura,
      peso,
      type: type.join(", "),
    };
    dispatch(postPokemon(pokemonData));
    console.log(pokemonData);
  };

  const handleTypeChange = (event) => {
    const selectedtype = Array.from(document.querySelectorAll('input[name=type]:checked')).map((input) => input.value);

    if (selectedtype.length >= 2) {
      document.querySelectorAll('input[name=type]:not(:checked)').forEach((input) => {
        input.disabled = true;
      });
    } else {
      document.querySelectorAll('input[name=type]:not(:checked)').forEach((input) => {
        input.disabled = false;
      });
    }

    setInput({
      ...input,
      type: selectedtype,
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };
      
  return (
    <>
      <form id="new-pokemon-form" className={style.newpokemonform} onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input value={input.name} type="text" id="name" name="name" required onChange={handleInputChange} />
  
          <label htmlFor="imagen">imagen:</label>
          <input value={input.imagen} type="url" id="imagen" name="imagen" required onChange={handleInputChange} />
        
          <label htmlFor="vida">Vida:</label>
          <input value={input.vida} type="number" id="vida" name="vida" min="1" max="100" required onChange={handleInputChange} />
    
          <label htmlFor="ataque">Ataque:</label>
          <input value={input.ataque} type="number" id="ataque" name="ataque" min="1" max="100" required onChange={handleInputChange} />
        
          <label htmlFor="defensa">Defensa:</label>
          <input value={input.defensa} type="number" id="defensa" name="defensa" min="1" max="100" required onChange={handleInputChange} />
        
          <label htmlFor="velocidad">Velocidad:</label>
          <input value={input.velocidad === null ? "" : input.velocidad} type="number" id="velocidad" name="velocidad" min="1" max="100" onChange={handleInputChange} />
        
          <label htmlFor="altura">Altura:</label>
          <input value={input.altura} type="number" id="altura" name="altura" min="1" max="10" onChange={handleInputChange} />
        
          <label htmlFor="peso">Peso:</label>
          <input value={input.peso} type="number" id="peso" name="peso" min="1" max="1000" onChange={handleInputChange} />
        
          <label htmlFor="type">Tipo(s):</label>
            <div className={style.type}>
              {types.map((type) => (
                <label key={type}>
                  <input type="checkbox" name="type" value={type} checked={input.type.includes(type)} onChange={handleTypeChange} />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
    
          <button type="submit" id="submit-button">Crear Pokemon</button>
      </form>
    </>
    );
  };
  
  export default Form;