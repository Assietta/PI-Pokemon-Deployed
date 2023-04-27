import Card from '../Card/Card.jsx';
import style from './Cards.module.css'
import { useSelector, useDispatch } from "react-redux"

export default function Cards() {
   const dispatch = useDispatch();
   const pokemons = useSelector(state => state.pokemons);
   return (
      <div className={style.cards}>
         {
            pokemons.map(({ id, name, vida, ataque, defensa, velocidad, altura, peso, tipos, isDB, imagen}) => {
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
   )
}
