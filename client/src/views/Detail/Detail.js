import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getID } from "../../redux/actions";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemonsID);

    useEffect(() => {
        dispatch(getID(id));
        console.log(pokemon);
    }, []);

    if ( typeof (pokemon) === 'object' ) {
        
        return (
            <div>
            <h2>{pokemon.name}</h2>
            <p>HP: {pokemon.vida}</p>
            <p>Attack: {pokemon.ataque}</p>
            <p>Defense: {pokemon.defensa}</p>
            <p>Speed: {pokemon.velocidad}</p>
            <p>Height: {pokemon.altura}</p>
            <p>Weight: {pokemon.peso}</p>
        </div>       
    )
    }
}

export default Detail;

