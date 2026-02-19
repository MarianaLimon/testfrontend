import { FaStar } from "react-icons/fa";
import { useFavorites } from "../context/FavoritesContext";

function FavoriteButton({ characterId, character, size = 14 }) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();
  const active = isFavorite(characterId);

  const handleClick = (e) => {
    e.stopPropagation(); // evita que abra modal si está dentro de card
    if (active) removeFavorite(characterId);
    else addFavorite(character);
  };

  return (
    <button onClick={handleClick} className="favorite-btn">
      <FaStar
        size={size}
        color={active ? "#2D68A2" : "transparent"}
        style={{
          stroke: active ? "#2D68A2" : "#838A91",
          strokeWidth: 55,
        }}
      />
    </button>
  );
}

export default FavoriteButton;