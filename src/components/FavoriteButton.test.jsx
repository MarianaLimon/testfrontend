import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "./FavoriteButton";

// Mock del contexto
const mockAddFavorite = vi.fn();
const mockRemoveFavorite = vi.fn();
const mockIsFavorite = vi.fn();

vi.mock("../context/FavoritesContext", () => ({
  useFavorites: () => ({
    addFavorite: mockAddFavorite,
    removeFavorite: mockRemoveFavorite,
    isFavorite: mockIsFavorite,
  }),
}));

describe("FavoriteButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("renderiza el ícono FaStar", () => {
    mockIsFavorite.mockReturnValue(false);
    const { container } = render(
      <FavoriteButton characterId={1} character={{ id: 1, name: "Rick" }} />
    );

    // Verificar botón
    const button = container.querySelector("button.favorite-btn");
    expect(button).toBeInTheDocument();

    // Verificar SVG
    const icon = container.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  test("llama a addFavorite si no está activo", () => {
    mockIsFavorite.mockReturnValue(false);

    const { container } = render(
      <FavoriteButton characterId={1} character={{ id: 1, name: "Rick" }} />
    );

    const button = container.querySelector("button.favorite-btn");
    fireEvent.click(button);

    expect(mockAddFavorite).toHaveBeenCalledWith({ id: 1, name: "Rick" });
    expect(mockRemoveFavorite).not.toHaveBeenCalled();
  });

  test("llama a removeFavorite si ya está activo", () => {
    mockIsFavorite.mockReturnValue(true);

    const { container } = render(
      <FavoriteButton characterId={1} character={{ id: 1, name: "Rick" }} />
    );

    const button = container.querySelector("button.favorite-btn");
    fireEvent.click(button);

    expect(mockRemoveFavorite).toHaveBeenCalledWith(1);
    expect(mockAddFavorite).not.toHaveBeenCalled();
  });
});