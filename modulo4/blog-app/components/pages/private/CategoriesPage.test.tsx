import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoriesPage from "./CategoriesPage";
import { renderWithRouter } from "../../test/testUtils";

import { getCategories, createCategory } from "../../services/categories.service";

jest.mock("../../services/categories.service", () => ({
  getCategories: jest.fn(),
  createCategory: jest.fn(),
  updateCategory: jest.fn(),
  deleteCategory: jest.fn()
}));

jest.mock("../../context/UiContext", () => ({
  useUi: () => ({ notify: jest.fn() })
}));

describe("CategoriesPage", () => {
  test("carga y muestra categorías", async () => {
    (getCategories as jest.Mock).mockResolvedValue({
      items: [{ id: "c1", name: "Noticias" }],
      page: 1,
      limit: 10,
      total: 1,
      totalPages: 1
    });

    renderWithRouter(<CategoriesPage />, { route: "/dashboard/categories?page=1" });

    await waitFor(() => {
      expect(screen.getByText("Noticias")).toBeInTheDocument();
    });

    expect(getCategories).toHaveBeenCalled();
  });

  test("abre el dialog de crear y ejecuta createCategory", async () => {
    const user = userEvent.setup();

    (getCategories as jest.Mock).mockResolvedValue({
      items: [],
      page: 1,
      limit: 10,
      total: 0,
      totalPages: 1
    });

    (createCategory as jest.Mock).mockResolvedValue({ id: "c99", name: "Nueva" });

    renderWithRouter(<CategoriesPage />);

    await user.click(screen.getByRole("button", { name: /Nueva/i }));

    await user.type(screen.getByLabelText(/nombre/i), "Nueva");
    await user.click(screen.getByRole("button", { name: /guardar/i }));

    expect(createCategory).toHaveBeenCalledWith({ name: "Nueva" });
  });
});