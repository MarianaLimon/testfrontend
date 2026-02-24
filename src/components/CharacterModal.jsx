import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

function CharacterModal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        setCharacter(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const closeModal = () => {
    navigate(-1);
  };

  if (loading) return <p>Cargando...</p>;
  if (!character) return <p>Personaje no encontrado</p>;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>
          CERRAR <AiOutlineClose size={15} />
        </button>

        <img
          src={character.image}
          alt={character.name}
          className="modal-image"
        />

        <h2 className="char character-name">{character.name}</h2>

        <div className="char-data">
          <p className="char character-status">
            <b>Estado:</b> {character.status}
          </p>

          <p className="char character-gender">
            <b>Género:</b> {character.gender}
          </p>

          <p className="char character-specie">
            <b>Especie:</b> {character.species}
          </p>

          <p className="char character-origin">
            <b>Origen:</b> {character.origin?.name.split(" (")[0]}
          </p>

          <p className="char character-location">
            <b>Ubicación:</b> {character.location?.name.split(" (")[0]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CharacterModal;