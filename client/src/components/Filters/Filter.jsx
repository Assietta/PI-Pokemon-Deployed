import { filterByType } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [prevSelectedTypes, setPrevSelectedTypes] = useState([]);
  const types = useSelector((state) => state.types);

  

  useEffect(() => {
    if (JSON.stringify(selectedTypes) !== JSON.stringify(prevSelectedTypes)) {
      dispatch(filterByType(selectedTypes));
      setPrevSelectedTypes(selectedTypes);
    }
  }, [selectedTypes, prevSelectedTypes, dispatch]);

  const handleTypeChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const count = isChecked ? selectedCount + 1 : selectedCount - 1;

    if (count <= 2) {
      setSelectedCount(count);

      if (isChecked) {
        setSelectedTypes([...selectedTypes, value]);
      } else {
        setSelectedTypes(selectedTypes.filter((type) => type !== value));
      }
    } else {
      event.preventDefault();
    }
  };

  
  return (
    <div>
      <h3>Filter by Type:</h3>
      <div>
         {types.map((type) => (
           <label key={type}>
             <input
               type="checkbox"
               name="type"
               value={type}
               checked={selectedTypes.includes(type)}
               onChange={handleTypeChange}
             />
             {type.charAt(0).toUpperCase() + type.slice(1)}
           </label>
         ))}
       </div>
    </div>
  );
};

export default Filter;

