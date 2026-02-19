/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

  export const FavoritesProvider = ({ children }) => {
    // Carga inicial desde localStorage
    const [favorites, setFavorites] = useState(() => {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    });

    // Guardar cambios en localStorage
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Agregar favorito
    const addFavorite = (character) => {
      if (!favorites.some((c) => c.id === character.id)) {
        setFavorites([...favorites, character]);
      }
    };

    // Quitar favorito
    const removeFavorite = (id) => {
      setFavorites(favorites.filter((c) => c.id !== id));
    };

    // Verificar si es favorito
    const isFavorite = (id) => favorites.some((c) => c.id === id);

    return (
      <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
        {children}
      </FavoritesContext.Provider>
    );
  };


export const useFavorites = () => useContext(FavoritesContext);
