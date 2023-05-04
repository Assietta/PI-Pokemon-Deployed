import style from './Form.module.css'
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { postPokemon } from '../../redux/actions';
// className={style.}

const Form = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        const form = document.getElementById('new-pokemon-form');

        const handleSubmit = (event) => {
          event.preventDefault(); 
      
          const name = document.getElementById('name').value;
          const imagen = document.getElementById('imagen').value;
          const vida = parseInt(document.getElementById('vida').value);
          const ataque = parseInt(document.getElementById('ataque').value);
          const defensa = parseInt(document.getElementById('defensa').value);
          const velocidad = parseInt(document.getElementById('velocidad').value);
          const altura = parseInt(document.getElementById('altura').value);
          const peso = parseInt(document.getElementById('peso').value);
          const type = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

          document.getElementById('new-pokemon-form').reset();
      
          
          const pokemonData = {
            name,
            imagen,
            vida,
            ataque,
            defensa,
            velocidad,
            altura,
            peso,
            type,
          };
          dispatch(postPokemon(pokemonData));
          console.log(pokemonData);
          };


      
        form.addEventListener('submit', handleSubmit);
      
        return () => {
          form.removeEventListener('submit', handleSubmit);
        };
      }, []);
      
      const handleTypeChange = (event) => {
        const selectedtype = Array.from(document.querySelectorAll('input[name=type]:checked'))
          .map(input => input.value);
        
        if (selectedtype.length >= 2) {
          document.querySelectorAll('input[name=type]:not(:checked)').forEach(input => {
            input.disabled = true;
          });
        } else {
          document.querySelectorAll('input[name=type]:not(:checked)').forEach(input => {
            input.disabled = false;
          });
        }
      };
      

    return (
      <>
        <form id="new-pokemon-form" className={style.newpokemonform}>
            <label for="name">Nombre:</label>
            <input type="text" id="name" name="name" required />

            <label for="imagen">imagen:</label>
            <input type="url" id="imagen" name="imagen" required/>

            <label for="vida">Vida:</label>
            <input type="number" id="vida" name="vida" min="1" max="100" required/>

            <label for="ataque">Ataque:</label>
            <input type="number" id="ataque" name="ataque" min="1" max="100" required/>

            <label for="defensa">Defensa:</label>
            <input type="number" id="defensa" name="defensa" min="1" max="100" required/>

            <label for="velocidad">Velocidad:</label>
            <input type="number" id="velocidad" name="velocidad" min="1" max="100"/>

            <label for="altura">Altura:</label>
            <input type="number" id="altura" name="altura" min="1" max="10"/>

            <label for="peso">Peso:</label>
            <input type="number" id="peso" name="peso" min="1" max="1000"/>

            <label htmlFor="type">Tipo(s):</label>
<div className={style.type}>
  <label>
    <input type="checkbox" name="type" value="normal" onChange={handleTypeChange}/>
    Normal
  </label>
  <label>
    <input type="checkbox" name="type" value="fighting" onChange={handleTypeChange}/>
    Fighting
  </label>
  <label>
    <input type="checkbox" name="type" value="flying" onChange={handleTypeChange}/>
    Flying
  </label>
  <label>
    <input type="checkbox" name="type" value="poison" onChange={handleTypeChange}/>
    Poison
  </label>
  <label>
    <input type="checkbox" name="type" value="ground" onChange={handleTypeChange}/>
    Ground
  </label>
  <label>
    <input type="checkbox" name="type" value="rock" onChange={handleTypeChange}/>
    Rock
  </label>
  <label>
    <input type="checkbox" name="type" value="bug" onChange={handleTypeChange}/>
    Bug
  </label>
  <label>
    <input type="checkbox" name="type" value="ghost" onChange={handleTypeChange}/>
    Ghost
  </label>
  <label>
    <input type="checkbox" name="type" value="steel" onChange={handleTypeChange}/>
    Steel
  </label>
  <label>
    <input type="checkbox" name="type" value="fire" onChange={handleTypeChange}/>
    Fire
  </label>
  <label>
    <input type="checkbox" name="type" value="water" onChange={handleTypeChange}/>
    Water
  </label>
  <label>
    <input type="checkbox" name="type" value="grass" onChange={handleTypeChange}/>
    Grass
  </label>
  <label>
    <input type="checkbox" name="type" value="electric" onChange={handleTypeChange}/>
    Electric
  </label>
  <label>
    <input type="checkbox" name="type" value="psychic" onChange={handleTypeChange}/>
    Psychic
  </label>
  <label>
    <input type="checkbox" name="type" value="ice" onChange={handleTypeChange}/>
    Ice
  </label>
  <label>
    <input type="checkbox" name="type" value="dragon" onChange={handleTypeChange}/>
    Dragon
  </label>
  <label>
    <input type="checkbox" name="type" value="dark" onChange={handleTypeChange}/>
    Dark
  </label>
  <label>
    <input type="checkbox" name="type" value="fairy" onChange={handleTypeChange}/>
    Fairy
  </label>
  <label>
    <input type="checkbox" name="type" value="unknown" onChange={handleTypeChange}/>
    Unknown
  </label>
  <label>
    <input type="checkbox" name="type" value="shadow" onChange={handleTypeChange}/>
    Shadow
  </label>
</div>


            <button type="submit" id="submit-button">Crear Pokemon</button>
        </form>     

      </>
    );
  };
  
  export default Form;