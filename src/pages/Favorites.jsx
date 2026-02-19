import { useState } from "react";
import BackToHomeButton from "../components/BackToHomeButton";
import { useFavorites } from "../context/FavoritesContext";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

function Favorites() {
  const { favorites } = useFavorites();

  // ----------------- PAGINACIÓN -----------------
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFavorites = favorites.slice(startIndex, endIndex);
  // ------------------------------------------------

  return (
    <div className="container">
      <h1 className="title">Mis Favoritos</h1>

      <div className="top-bar">
        <BackToHomeButton />
      </div>  

      <div className="container-grid">
        {favorites.length === 0 ? (
          <p>No tienes personajes favoritos aún.</p>
        ) : (
          <>
            <div className="grid">
              {currentFavorites.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          </>
        )}
      </div>

      {/* PAGINADOR */}
      <div className="pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default Favorites;
