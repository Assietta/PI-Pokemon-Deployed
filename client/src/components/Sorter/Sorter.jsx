import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { sortByName, sortByAtaque } from "../../redux/actions";

export default function Sorter(){
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');
      
    useEffect(() => {
        if (selectedValue === 'asc' || selectedValue === 'desc') {
            dispatch(sortByName(selectedValue));
        }
    }, [selectedValue]);

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
            <select onChange={handlerSort} name="" id=""> 
                    <option hidden>Ordenar Alfabeticamente:</option>
                        <option value="asc">A-Z</option>
                        <option value="desc">Z-A</option>
            </select>
            <select onChange={handlerSort2} name="" id=""> 
                    <option hidden> Ordenar Por Ataque:</option>
                        <option value="ataquemax">Ataque Max</option>
                        <option value="ataquemin">Ataque Min</option>
            </select>
        </>
    )
}

