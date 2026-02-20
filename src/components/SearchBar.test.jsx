import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("el input cambia cuando el usuario escribe", () => {
  const mockOnChange = vi.fn();
  render(<SearchBar value="" onChange={mockOnChange} />);

  const input = screen.getByPlaceholderText(/buscar\.\.\./i);
  fireEvent.change(input, { target: { value: "Rick" } });

  expect(mockOnChange).toHaveBeenCalledWith("Rick");
});

test("se renderiza el input y el ícono", () => {
  const { container } = render(<SearchBar value="" onChange={() => {}} />);

  // Verificar input
  const input = screen.getByPlaceholderText(/buscar\.\.\./i);
  expect(input).toBeInTheDocument();

  // Verificar ícono por clase (sin tocar el componente)
  const icon = container.querySelector(".search-icon");
  expect(icon).toBeInTheDocument();
});