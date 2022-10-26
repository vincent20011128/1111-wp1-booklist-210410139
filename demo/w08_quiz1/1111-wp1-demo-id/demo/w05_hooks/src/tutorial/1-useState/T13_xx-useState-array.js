import React, { useState } from 'react';
import { data } from '../../data';

const T13_xx_UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter( (person) => person.id !== id );
    setPeople(newPeople);
  };

  console.log('people', people);
  return (
    <>
       { people.map( (person) => {
        const {id, name} = person;
        return (
          <div key={id} className='item'>
              <h4>{name}</h4>
              <button onClick={ () => removeItem(id)}>Remove</button>
          </div>
        )
       })}
    </>
  );
};

export default T13_xx_UseStateArray;
