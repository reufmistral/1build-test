import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalStyle from "globalStyle";
import { Routes } from "AppRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router>
          <Routes />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
