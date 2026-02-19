import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function BackToHomeButton({ text = "Volver" }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/"); 
    };

    return (
        <button className="back-btn" onClick={handleClick}>
            <div className="fav-icon fav-icon-back">
                <FaHome />
            </div>
            <span>{text}</span>
        </button>
    );
}

export default BackToHomeButton;
