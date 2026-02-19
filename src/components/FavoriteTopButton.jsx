import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FavoriteTopButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/favorites"); 
    };

    return (
        <button className="favorites-btn" onClick={handleClick}>
        <span>Mis favoritos</span>
        <div className="fav-icon">
            <FaStar />
        </div>
        </button>
    );
}

export default FavoriteTopButton;