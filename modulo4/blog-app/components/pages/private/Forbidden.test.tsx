import React from "react";
import { render, screen } from "@testing-library/react";
import Forbidden from "./Forbidden";

describe("Forbidden", () => {
  test("muestra mensaje de acceso denegado", () => {
    render(<Forbidden />);
    expect(screen.getByText(/Acceso denegado/i)).toBeInTheDocument();
  });
});