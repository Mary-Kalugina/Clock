import React from 'react';

interface FieldsProps {
    addClock: (name: string, time: string) => void;
  }
  
  const Fields: React.FC<FieldsProps> = ({addClock }) => {
    const changeData = () => {
      const name = document.getElementById('name') as HTMLSelectElement;
      const time = document.getElementById('zone') as HTMLSelectElement;
      addClock(name.value, time.value);
    };
  
    return (
      <>
        <select id='name'> City
          <option>New York</option>
          <option>Moscow</option>
          <option>London</option>
          <option>Tokyo</option>
        </select>
        <select id='zone'>UTC zone
          <option>-4</option>
          <option>+3</option>
          <option>+0</option>
          <option>+9</option>
        </select>
        <button onClick={changeData}>Add Clock</button>
      </>
    );
  };
  
  export default Fields;
   