import React from "react";
import { screen, waitFor } from "@testing-library/react";
import UsersPage from "./UsersPage";
import { renderWithRouter } from "../../test/testUtils";
import { getUsers } from "../../services/users.service";

jest.mock("../../services/users.service", () => ({
  getUsers: jest.fn(),
  createUser: jest.fn(),
  updateUser: jest.fn(),
  deleteUser: jest.fn()
}));

jest.mock("../../context/UiContext", () => ({
  useUi: () => ({ notify: jest.fn() })
}));

describe("UsersPage", () => {
  test("carga y lista usuarios", async () => {
    (getUsers as jest.Mock).mockResolvedValue({
      items: [{ id: "u1", username: "admin", email: "a@test.com", role: "admin" }],
      page: 1,
      limit: 10,
      total: 1,
      totalPages: 1
    });

    renderWithRouter(<UsersPage />, { route: "/dashboard/users?page=1" });

    await waitFor(() => {
      expect(screen.getByText("admin")).toBeInTheDocument();
      expect(screen.getByText("a@test.com")).toBeInTheDocument();
    });

    expect(getUsers).toHaveBeenCalled();
  });
});