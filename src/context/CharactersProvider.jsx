import React, { useState, useEffect } from "react";
import { CharactersContext } from "./CharactersContext";

export function CharactersProvider({ children }) {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState(""); // texto de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // página actual
  const [totalPages, setTotalPages] = useState(1); // total de páginas
  const [loading, setLoading] = useState(false); // para mostrar "Cargando..."
  const [error, setError] = useState(null); // si no encuentra resultados

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?name=${encodeURIComponent(
            search
          )}&page=${currentPage}`
        );

        if (!res.ok) {
          throw new Error("No se encontraron personajes");
        }

        const data = await res.json();
        setCharacters(data.results || []);
        setTotalPages(data.info?.pages || 1);
      } catch (err) {
        console.error(err);
        setCharacters([]);
        setTotalPages(1);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [search, currentPage]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        setCharacters,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        totalPages,
        loading,
        error,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
