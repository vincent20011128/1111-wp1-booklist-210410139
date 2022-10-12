import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { useState } from 'react';

const T14_39_UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'vincent',
    age:20,
    message:'random message'
  });

  const changeMessage = () => {
    setPerson({...person,message:'vincnet, 210410139'});
  }
  return <>
  <h3>{person.name}</h3>
  <h3>{person.age}</h3>
  <h4>{person.message}</h4>
  <button className="btn" onClick={changeMessage}>Change Message</button>
</>;
};

export default T14_39_UseStateObject;
