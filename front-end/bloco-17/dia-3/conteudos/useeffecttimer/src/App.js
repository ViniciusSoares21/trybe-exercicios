import React from 'react';
import useTimer from './hooks/useTimer';
import './App.css';

function App() {
  const { timer, randomNumber, isMultiple } = useTimer();
  return (
    <div className="App">
      <p>{`Número gerado: ${randomNumber}`}</p>
      <p>{`Tempo: ${timer}`}</p>
      <p>{isMultiple && 'Bingo!!'}</p>
    </div>
  );
}

export default App;
