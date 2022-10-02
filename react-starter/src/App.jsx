import React, { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Summary from "./components/Summary/Summary";

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>COVID-19 Tracker</h1>
        <div className="card">
          <Summary />
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
