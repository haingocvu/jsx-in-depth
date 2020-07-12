import React from 'react';
import './App.css';
import Repeat from './components/Repeat';

function App() {
  const repeatFn = (i) => <div key={i}>this is div ele {i}</div>;
  return (
    <div className="App">
      <Repeat numTimes={8}>{repeatFn}</Repeat>
    </div>
  );
}

export default App;
