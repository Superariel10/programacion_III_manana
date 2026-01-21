import React from "react";
import { screen } from "@testing-library/react";
import PublicHeader from "./PublicHeader";
import { renderWithRouter } from "../../test/testUtils";

describe("PublicHeader", () => {
  test("renderiza links principales", () => {
    renderWithRouter(<PublicHeader />);

    expect(screen.getByText(/Blog/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Inicio/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Login/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Registro/i })).toBeInTheDocument();
  });
});