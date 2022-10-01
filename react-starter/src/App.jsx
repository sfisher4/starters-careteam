import React, { useState } from "react";
import "./App.css";
import Summary from './components/Summary';

function App() {
  const [count, setCount] = useState(0);

  return  (
    <div className="App">
      <h1>COVID-19 Tracker</h1>
      <div className="card">
        <button type="button" onClick={() => setCount(() => count + 1)}>
          count is {count}
        </button>
        <Summary />
      </div>
    </div>
  );
}

export default App;
