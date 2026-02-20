import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  test("renderiza botones de páginas y flechas", () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={3} totalPages={7} onPageChange={onPageChange} />);

    // Flechas
    expect(screen.getByText("‹")).toBeInTheDocument();
    expect(screen.getByText("›")).toBeInTheDocument();

    // Botones de páginas visibles
    [1, 2, 3, 4, 5, 7].forEach((page) => {
      expect(screen.getByText(page.toString())).toBeInTheDocument();
    });

    // Puntos suspensivos
    expect(screen.getByText("...")).toBeInTheDocument();

    // Página activa
    const activeBtn = screen.getByText("3");
    expect(activeBtn).toHaveClass("active");
  });

  test("botones de flecha deshabilitados en extremos", () => {
    const onPageChange = vi.fn();

    // Página inicial
    const { rerender } = render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText("‹")).toBeDisabled();
    expect(screen.getByText("›")).not.toBeDisabled();

    // Página final
    rerender(<Pagination currentPage={5} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText("‹")).not.toBeDisabled();
    expect(screen.getByText("›")).toBeDisabled();
  });

  test("llama a onPageChange con el número correcto", () => {
    const onPageChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={3} onPageChange={onPageChange} />);

    fireEvent.click(screen.getByText("1"));
    expect(onPageChange).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText("›"));
    expect(onPageChange).toHaveBeenCalledWith(3);

    fireEvent.click(screen.getByText("‹"));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });
});