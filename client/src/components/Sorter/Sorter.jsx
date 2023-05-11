import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { sortByName, sortByAtaque } from "../../redux/actions";
import style from './Sorter.module.css';

export default function Sorter(){
    const dispatch = useDispatch();
    const [selectedValue] = useState('');
      
    useEffect(() => {
        if (selectedValue === 'asc' || selectedValue === 'desc') {
            dispatch(sortByName(selectedValue));
        }
    }, [dispatch, selectedValue]);

    function handlerSort(e){
		e.preventDefault();
		dispatch(sortByName(e.target.value));
	}

    function handlerSort2(e){
		e.preventDefault();
		dispatch(sortByAtaque(e.target.value));
	}

    return (
        <>
            <select onChange={handlerSort} name="" id="" className={style.sortSelect}> 
                    <option hidden>Ordenar Alfabeticamente:</option>
                        <option value="asc" className={style.sortOption}>A-Z</option>
                        <option value="desc" className={style.sortOption}>Z-A</option>
            </select>
            <select onChange={handlerSort2} name="" id="" className={style.sortSelect}> 
                    <option hidden> Ordenar Por Ataque:</option>
                        <option value="ataquemin" className={style.sortOption}>Ataque Max</option>
                        <option value="ataquemax" className={style.sortOption}>Ataque Min</option>
            </select>
        </>
    )
}
