import React, { useState } from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Summary from "./components/Summary/Summary";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>COVID-19 Tracker</h1>
        <Summary />
      </QueryClientProvider>
    </div>
  );
}

export default App;
