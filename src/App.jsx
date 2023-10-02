import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (count === 10) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [count]);

  return (
    <div className="App">
      <h1>Counter Sederhana Kel 10</h1>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>

      {showMessage && <p>Counter mencapai angka 10</p>}
    </div>
  );
}

export default App;
