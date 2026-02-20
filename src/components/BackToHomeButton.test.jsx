import { render, screen, fireEvent } from "@testing-library/react";
import BackToHomeButton from "./BackToHomeButton";

const mockedNavigate = vi.fn();

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("BackToHomeButton", () => {
  test("se renderiza y hace click", () => {
    render(<BackToHomeButton />);
    const btn = screen.getByRole("button", { name: /volver/i });
    fireEvent.click(btn);
    expect(mockedNavigate).toHaveBeenCalled();
  });
});