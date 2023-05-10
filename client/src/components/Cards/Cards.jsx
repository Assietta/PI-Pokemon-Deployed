import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
import { useSelector, useDispatch } from "react-redux"
import Paginado from '../Paginado/paginado.jsx';
import { useState } from 'react';


export default function Cards() {
   const dispatch = useDispatch();
   const pokemons = useSelector(state => state.pokemons);

   const [currentPage, setCurrentPage] = useState(1)
   const [pokemonsPerPage, setpokemonsPerPage] = useState(12)
   const indexOfLastPokemon = currentPage * pokemonsPerPage
   const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage
   const currentpokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon)

   const paginado = (pageNumber) => {
      setCurrentPage(pageNumber)
   }

   return (
      <div>
      <div className={style.cards}>
         {
            currentpokemons.map(({ id, name, vida, ataque, defensa, velocidad, altura, peso, tipos, isDB, imagen}) => {
               return <Card
                  id={id}
                  key={id}
                  name={name}
                  vida={vida}
                  ataque={ataque}
                  defensa={defensa}
                  velocidad={velocidad}
                  altura={altura}
                  peso={peso}
                  tipos={tipos}
                  imagen={imagen}
                  isDB={isDB}
               />
            })
         }
      </div>
      <div>
         <div className={style.center}>
            <Paginado
                  className='paginado'
                  pokemonsPerPage={pokemonsPerPage}
                  totalPokemons={pokemons.length}
                  paginado={paginado}
                  currentPage={currentPage}
            />
         </div>
      </div>
      </div>
   )
}