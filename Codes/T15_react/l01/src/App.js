// import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const title1 = `Hi from React`;
  const title2 = <h1>Hi again, from React</h1>;
  // const title3 = React.createElement('h1', null, 'Hi again, from React');
  let counter1 = 0;
  const [counter2, setCounter2] = useState(0);
  return (
    <div className='App'>
      <h1>Hi</h1>
      <h1>{title1}</h1>
      {title2}
      {/* {title3} */}
      <h1>Counter App (Not Working)</h1>
      <div>Counter: {counter1}</div>
      <button
        onClick={() => {
          counter1 += 1;
          console.log(counter1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          counter1 -= 1;
          console.log(counter1);
        }}
      >
        -
      </button>

      <h1>Counter App</h1>
      <p>Counter: {counter2}</p>
      <button
        onClick={() => {
          setCounter2(counter2 + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter2(counter2 - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
