import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import Summary from "./components/Summary/Summary";
import ErrorFallback from "./components/Summary/ErrorFallback";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <h1>COVID-19 Tracker</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Summary />
        </ErrorBoundary>
      </QueryClientProvider>
    </div>
  );
}

export default App;
