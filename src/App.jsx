import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import CharacterModal from "./components/CharacterModal";

function App() {
  const location = useLocation();
  const state = location.state;
  const background = state && state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

      {background && (
        <Routes>
          <Route path="/character/:id" element={<CharacterModal />} />
        </Routes>
      )}
    </>
  );
}

export default App;
