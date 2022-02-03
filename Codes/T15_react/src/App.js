import './App.css';
import React, { useState } from 'react';

function App() {
  const title1 = `Hi from React!`;
  const title2 = React.createElement('p', null, 'Hi from React!');
  const title3 = <p>Hi from React!</p>;

  const [count, setCount] = useState(0);

  let count2 = 0;
  return (
    <div className='App'>
      <h1>JSX</h1>
      <p>Hi from React!</p>
      <p>{title1}</p>
      {title2}
      {title3}

      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>

      <h1>Not Working</h1>
      <p>Count: {count2}</p>
      <button
        onClick={() => {
          count2 = count2 + 1;
          console.log(count2);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          count2 = count2 - 1;
          console.log(count2);
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
