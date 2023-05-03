import style from './Form.module.css'
import { useEffect } from 'react';
// className={style.}

const Form = () => {
    useEffect(() => {
        const form = document.getElementById('new-pokemon-form');
      
        const handleSubmit = (event) => {
          event.preventDefault(); // evita que se envíe el formulario
      
          // Obtener los valores de los campos
          const name = document.getElementById('name').value;
          const image = document.getElementById('image').value;
          const life = parseInt(document.getElementById('life').value);
          const attack = parseInt(document.getElementById('attack').value);
          const defense = parseInt(document.getElementById('defense').value);
          const speed = parseInt(document.getElementById('speed').value);
          const height = parseInt(document.getElementById('height').value);
          const weight = parseInt(document.getElementById('weight').value);
          const types = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

      
          // Realizar las validaciones necesarias
          if (!/^[a-zA-Z]+$/.test(name)) {
            alert('El nombre del Pokemon no debe contener números');
            return;
          }
      
          if (defense > 100) {
            alert('La defensa no puede exceder el valor de 100');
            return;
          }

          if (types.length === 0) {
            alert('Debe seleccionar al menos un tipo de Pokemon');
            return;
          }
    
          if (types.length > 2) {
            alert('Solo se pueden seleccionar hasta dos tipos de Pokemon');
            return;
          }
      
          // Enviar los datos al servidor (aquí iría el código para hacer la petición AJAX)
          console.log('Nombre:', name);
          console.log('Imagen:', image);
          console.log('Vida:', life);
          console.log('Ataque:', attack);
          console.log('Defensa:', defense);
          console.log('Velocidad:', speed);
          console.log('Altura:', height);
          console.log('Peso:', weight);
          console.log('types:', types);
        };
      
        form.addEventListener('submit', handleSubmit);
      
        return () => {
          form.removeEventListener('submit', handleSubmit);
        };
      }, []);
      
      const handleTypeChange = (event) => {
        const selectedTypes = Array.from(document.querySelectorAll('input[name=type]:checked'))
          .map(input => input.value);
        
        if (selectedTypes.length >= 2) {
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

            <label for="image">Imagen:</label>
            <input type="url" id="image" name="image" required/>

            <label for="life">Vida:</label>
            <input type="number" id="life" name="life" min="1" max="100" required/>

            <label for="attack">Ataque:</label>
            <input type="number" id="attack" name="attack" min="1" max="100" required/>

            <label for="defense">Defensa:</label>
            <input type="number" id="defense" name="defense" min="1" max="100" required/>

            <label for="speed">Velocidad:</label>
            <input type="number" id="speed" name="speed" min="1" max="100"/>

            <label for="height">Altura:</label>
            <input type="number" id="height" name="height" min="1" max="10"/>

            <label for="weight">Peso:</label>
            <input type="number" id="weight" name="weight" min="1" max="1000"/>

            <label htmlFor="types">Tipo(s):</label>
<div className={style.types}>
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