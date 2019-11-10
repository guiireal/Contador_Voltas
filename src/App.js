import React, { useState, useEffect } from 'react';

import './styles.css';


import Button from './components/Button';
import ShowRounds from './components/ShowRounds';
import ShowTime from './components/ShowTime';

function App() {
  const [numRounds, setNumRounds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let timer = null;
    if (isRunning) {

      timer = setInterval(() => {
        setTime(old => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning]);

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };
  const increment = () => {
    setNumRounds(numRounds + 1);
  };
  const decrement = () => {
    if (numRounds > 0) setNumRounds(numRounds - 1);
  };

  const reset = () => {
    setNumRounds(0);
    setTime(0);
  };

  return (
    <div>
      <ShowRounds rounds={numRounds}/>
      <Button text='+' className='bigger' onClick={increment}/>
      <Button text='-' className='bigger' onClick={decrement}/>
      {
        numRounds > 0 && <ShowTime time={Math.round(time / numRounds)}/>
      }
      <Button text={isRunning ? 'Pausar' : 'Iniciar'} onClick={toggleRunning}/>
      <Button text='Reiniciar' onClick={reset}/>
    </div>
  );
}

export default App;
