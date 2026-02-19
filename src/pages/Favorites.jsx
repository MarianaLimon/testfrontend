import { useFavorites } from "../context/FavoritesContext";
import CharacterCard from "../components/CharacterCard";

function Favorites() {
  const { favorites } = useFavorites();

  return (
    <div className="container">
      <h1 className="title">Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes personajes favoritos aún.</p>
      ) : (
        <div className="grid">
          {favorites.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
