import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import { AiOutlineClose } from "react-icons/ai";

function CharacterModal() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { characters } = useContext(CharactersContext);

  // Buscar el personaje por id, permitiendo string/number
  const character = characters.find(c => c.id == id);

  // Si no existe el personaje
  if (!character) return <p>Personaje no encontrado</p>;

  const closeModal = () => {
    // Si venimos directo desde URL, redirige a la lista
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/"); // ruta principal o lista de personajes
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>CERRAR <AiOutlineClose size={15} /></button>
        <img src={character.image} alt={character.name} className="modal-image" />
        <h2 className="char character-name">{character.name}</h2>
        <div className="char-data">
            <p className="char character-status"><b>Estado:</b> {character.status}</p>
            <p className="char character-gender"><b>Género:</b> {character.gender}</p>
            <p className="char character-specie"><b>Especie:</b> {character.species}</p>
            <p className="char character-origin">
                <b>Origen:</b> {character.origin.name.split(" (")[0]}
            </p>
            <p className="char character-location">
                <b>Ubicación:</b> {character.location.name.split(" (")[0]}
            </p>
        </div>
        {/* Aquí después podemos agregar botón de favoritos ❤️ */}
      </div>
    </div>
  );
}

export default CharacterModal;
