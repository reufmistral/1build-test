import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "globalStyle";
import { Routes } from "AppRoutes";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
