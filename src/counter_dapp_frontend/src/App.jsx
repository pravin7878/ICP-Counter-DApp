import React, { useState, useEffect } from "react";
import { counter_dapp_backend } from "declarations/counter_dapp_backend";
import "./index.scss"; 

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    counter_dapp_backend.get_count().then(setCount);
  }, []);

  const increment = async () => {
    await counter_dapp_backend.increment();
    setCount(await counter_dapp_backend.get_count());
  };

  const decrement = async () => {
    await counter_dapp_backend.decrement();
    setCount(await counter_dapp_backend.get_count());
  };

  return (
    <div id="container">
      <div>
        <h1 id="title">ICP Counter DApp</h1>
        <p id="counter">Count: {count}</p>
        <div id="button-container">
          <button id="increment" className="button" onClick={increment}>
            Increment
          </button>
          <button id="decrement" className="button" onClick={decrement}>
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
