import { useNavigate, useLocation } from "react-router-dom"; 

function CharacterCard({ character }) {
    const navigate = useNavigate();
    const location = useLocation();

    const openModal = () => {
        navigate(`/character/${character.id}`, { state: { background: location } });
    };

    return (
        <div onClick={openModal} className="card">
        <img src={character.image} alt={character.name} />
        <h3 className="char-name">{character.name}</h3>
        {/* Aquí luego va el botón de favoritos ❤️ */}
        </div>
    );
    }

export default CharacterCard