import { filterByCreated, filterByType } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Filter = () => {
  const dispatch = useDispatch();
  const [isDB, setIsDB] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);

  const types = useSelector((state) => state.types)

  useEffect(() => {
    if (isDB !== '') {
      console.log(isDB)
      dispatch(filterByCreated(isDB));
    }
  }, [isDB, dispatch]);

  useEffect(() => {
    if (selectedTypes.length > 0) {
      console.log(selectedTypes)
      dispatch(filterByType(selectedTypes));
    }
  }, [selectedTypes, dispatch]);

  const handleOrigenChange = (event) => {
    setIsDB(event.target.value === "true");
  };

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
      <h3>Filter by isDB</h3>
      <div>
        <label>
          <input
            type="radio"
            name="origen"
            value="true"
            checked={isDB === true}
            onChange={handleOrigenChange}
          />
          API
        </label>
        <label>
          <input
            type="radio"
            name="origen"
            value="false"
            checked={isDB === false}
            onChange={handleOrigenChange}
          />
          Database
        </label>
      </div>
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
