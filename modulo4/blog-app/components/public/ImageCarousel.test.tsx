import React from "react";
import { render, screen } from "@testing-library/react";
import ImageCarousel from "./ImageCarousel";

// Mock del carousel (para que no rompa JSDOM)
jest.mock("react-material-ui-carousel", () => {
  return function MockCarousel(props: any) {
    return <div data-testid="carousel">{props.children}</div>;
  };
});

describe("ImageCarousel", () => {
  test("renderiza el contenedor del carousel", () => {
    render(<ImageCarousel />);
    expect(screen.getByTestId("carousel")).toBeInTheDocument();
  });

  test("muestra al menos un título de imagen", () => {
    render(<ImageCarousel />);
    // según el componente trae títulos como “Montañas”
    expect(screen.getByText(/Montañas/i)).toBeInTheDocument();
  });
});