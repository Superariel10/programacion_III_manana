import React from "react";
import { render, screen } from "@testing-library/react";
import PublicFooter from "./PublicFooter";

describe("PublicFooter", () => {
  test("muestra texto del footer", () => {
    render(<PublicFooter />);
    expect(screen.getByText(/Blog App/i)).toBeInTheDocument();
  });
});