import React from "react";
import { render, screen } from "@testing-library/react";
import DashboardHome from "./DashboardHome";

describe("DashboardHome", () => {
  test("renderiza el título principal", () => {
    render(<DashboardHome />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });
});