import { useState } from 'react';
import style from "./Card.module.css"
import { Link } from 'react-router-dom';

export default function Card({ id, name, vida, ataque, defensa, velocidad, altura, peso, tipos, isDB, imagen }) {
   const [isFlipped, setIsFlipped] = useState(false);
   const [imageLoaded, setImageLoaded] = useState(false);
   
   // Capitalizar la primera letra del nombre
   const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

   return (
      <Link to={`/detail/${id}`} className={style.cardLink}>
         <div className={style.cardContainer}>
            <div className={`${style.card} ${isFlipped ? style.flipped : ""}`} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
               <div className={style.front} style={{ pointerEvents: "none" }}>
                  <div className={style.imageContainer}>
                     <img
                        src={imagen}
                        alt={imagen}
                        className={imageLoaded ? style.imageLoaded : style.image}
                        onLoad={() => setImageLoaded(true)}
                     />
                  </div>
                  <h2 className={style.name}>{capitalized}</h2>
                  <div className={style.types}>
                     {tipos.map((tipo) => (
                        <span key={tipo} className={style.tipo}>{tipo}</span>
                     ))}
                  </div>
               </div>
               <div className={style.back}>
                  <div className={style.stats}>
                     <div className={style.stat}>
                        <span className={style.statName}>Vida:</span>
                        <span className={style.statValue}>{vida}</span>
                     </div>
                     <div className={style.stat}>
                        <span className={style.statName}>Ataque:</span>
                        <span className={style.statValue}>{ataque}</span>
                     </div>
                     <div className={style.stat}>
                        <span className={style.statName}>Defensa:</span>
                        <span className={style.statValue}>{defensa}</span>
                     </div>
                     <div className={style.stat}>
                        <span className={style.statName}>Velocidad:</span>
                        <span className={style.statValue}>{velocidad}</span>
                     </div>
                     <div className={style.stat}>
                        <span className={style.statName}>Altura:</span>
                        <span className={style.statValue}>{altura}</span>
                     </div>
                     <div className={style.stat}>
                        <span className={style.statName}>Peso:</span>
                        <span className={style.statValue}>{peso}</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
}
