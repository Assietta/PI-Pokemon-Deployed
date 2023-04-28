import React from "react";
import style from './Paginado.module.css'

export default function Paginado({ pokemonsPerPage, totalPokemons, paginado, currentPage }) {
   const totalPages = Math.ceil(totalPokemons / pokemonsPerPage);

   return (
      <div>
         <nav className={style.navs}>
            <ul className={style.ul}>
               <li className={style.li}>
                  <button className={style.button} disabled={currentPage === 1} onClick={() => paginado(currentPage - 1)}>Prev</button>
               </li>
               <li>
                  <span className={style.span}>Page {currentPage} of {totalPages}</span>
               </li>
               <li>
                  <button className={style.button} disabled={currentPage === totalPages} onClick={() => paginado(currentPage + 1)}>Next</button>
               </li>
            </ul>
         </nav>
      </div>
   );
}
