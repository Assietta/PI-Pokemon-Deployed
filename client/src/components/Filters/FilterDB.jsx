import { filterByCreated } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

const FilterDB = () => {
  const dispatch = useDispatch();
  const [isDB, setIsDB] = useState("");

  useEffect(() => {
    if (isDB !== '') {
      dispatch(filterByCreated(isDB));
    }
  }, [isDB, dispatch]);

  const handleOrigenChange = (event) => {
    setIsDB(event.target.value === "true");
  };


  
  return (
    <div>
      <h3>Filter by isDB</h3>
      <div>
        <label>
          <input
            type="radio"
            name="origen"
            value="false"
            checked={isDB === false}
            onChange={handleOrigenChange}
          />
          API
        </label>
        <label>
          <input
            type="radio"
            name="origen"
            value="true"
            checked={isDB === true}
            onChange={handleOrigenChange}
          />
          Database
        </label>
      </div>
    </div>
  );
};

export default FilterDB;

