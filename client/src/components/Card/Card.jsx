import { useState } from 'react';
import style from "./Card.module.css"
import { Link } from 'react-router-dom';

export default function Card({ id, name, vida, ataque, defensa, velocidad, altura, peso, tipos, isDB, imagen }) {
   const [isFlipped, setIsFlipped] = useState(false);
   const [imageLoaded, setImageLoaded] = useState(false);
   

   return (
   <Link to={`/detail/${id}`}>
      <div className={`${style.card} ${isFlipped ? style.flipped : ""}`} onMouseEnter={() => setIsFlipped(true)} onMouseLeave={() => setIsFlipped(false)}>
         <div className={style.front}>
            <div className={style.imageContainer}>
               <img 
                  src={imagen} 
                  alt={imagen} 
                  className={imageLoaded ? style.imageLoaded : style.image} 
                  onLoad={() => setImageLoaded(true)}
                  />
            </div>
            <h2 className={style.name}>{name}</h2>
            <div className={style.types}>
               {tipos.map((tipo) => (
                  <span key={tipo} className={style.tipo}>{tipo}</span>
                  ))}
            </div>
         </div>
         <div className={style.back}>
            <div className={style.stats}>
               <div className={style.stat}>
                  <span className={style.statName}>HP</span>
                  <span className={style.statValue}>{vida}</span>
               </div>
               <div className={style.stat}>
                  <span className={style.statName}>Attack</span>
                  <span className={style.statValue}>{ataque}</span>
               </div>
               <div className={style.stat}>
                  <span className={style.statName}>Defense</span>
                  <span className={style.statValue}>{defensa}</span>
               </div>
               <div className={style.stat}>
                  <span className={style.statName}>Speed</span>
                  <span className={style.statValue}>{velocidad}</span>
               </div>
               <div className={style.stat}>
                  <span className={style.statName}>Height</span>
                  <span className={style.statValue}>{altura}</span>
               </div>
               <div className={style.stat}>
                  <span className={style.statName}>Weight</span>
                  <span className={style.statValue}>{peso}</span>
               </div>
            </div>
         </div>
      </div>
   </Link>
   );
}
