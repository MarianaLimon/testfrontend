import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CharactersProvider } from "./context/CharactersProvider";
import { FavoritesProvider } from "./context/FavoritesContext"; // <-- importamos
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <FavoritesProvider> {/* <-- envolvemos App */}
          <App />
        </FavoritesProvider>
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
