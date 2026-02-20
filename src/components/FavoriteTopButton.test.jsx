import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteTopButton from "./FavoriteTopButton";

// Mock de useNavigate
const mockNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("FavoriteTopButton", () => {
  beforeEach(() => {
    mockNavigate.mockReset();
  });

  test("se renderiza con texto y ícono", () => {
    const { container } = render(<FavoriteTopButton />);

    // Verificar texto
    expect(screen.getByText("Mis favoritos")).toBeInTheDocument();

    // Verificar ícono SVG
    const icon = container.querySelector("svg"); // <--- directamente
    expect(icon).toBeInTheDocument();
  });

  test("llama a navigate al hacer click", () => {
    render(<FavoriteTopButton />);

    const button = screen.getByRole("button", { name: /mis favoritos/i });
    fireEvent.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/favorites");
  });
});