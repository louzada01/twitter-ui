import React from "react";

import Routes from "./routes";

import { GlobalStyle } from "./styles/globals";
import { IconContext } from "react-icons";

const App = () => (
  <IconContext.Provider value={{ className: "react-icons" }}>
    <GlobalStyle />
    <Routes />
  </IconContext.Provider>
);

export default App;
