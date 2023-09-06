import React, {useState} from 'react';
import Clock from './components/Clock';
import Fields from './components/Fields';

const App: React.FC = () => {

  const [clocks, setClocks] = useState<{ name: string, time: string }[]>([]); 
  
  const addClock = (name, time) => {
    setClocks([...clocks, { name, time }]);
  };

  return (
  <>
  <Fields addClock={addClock} />
    <div>
        {clocks.map((clock, index) => (
          <Clock index={index} key={index} data={clock} setClocks={setClocks} clocks={clocks} />
        ))}
      </div>
  </>
    
  );
}

export default App;