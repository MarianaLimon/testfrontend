import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CharactersProvider } from "./context/CharactersProvider";
import { FavoritesProvider } from "./context/FavoritesContext"; 
import './css/variables.css';
import './css/reset.css';
import './css/layout.css';
import './css/topbar.css';
import './css/cards.css';
import './css/pagination.css';
import './css/modal.css';
import './css/buttons.css';
import './css/responsive.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersProvider>
        <FavoritesProvider> 
          <App />
        </FavoritesProvider>
      </CharactersProvider>
    </BrowserRouter>
  </React.StrictMode>
);
