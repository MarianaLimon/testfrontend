import { useNavigate, useLocation } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

function CharacterCard({ character }) {
  const navigate = useNavigate();
  const location = useLocation();

  const openModal = () => {
    navigate(`/character/${character.id}`, { state: { background: location } });
  };

  return (
    <div onClick={openModal} className="card">
      <img src={character.image} alt={character.name} />

      <div className="card-info">
        <h3 className="card-title">{character.name}</h3>
        <FavoriteButton characterId={character.id} character={character} />
      </div>
    </div>
  );
}

export default CharacterCard;