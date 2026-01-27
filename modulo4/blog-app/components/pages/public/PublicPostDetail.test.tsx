import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PublicPostDetail from "./PublicPostDetail";
import { getPublicPostById } from "../../services/posts.service";

jest.mock("../../services/posts.service", () => ({
  getPublicPostById: jest.fn()
}));

describe("PublicPostDetail", () => {
  test("muestra detalle del post por id", async () => {
    (getPublicPostById as jest.Mock).mockResolvedValue({
      id: "p1",
      title: "Detalle",
      content: "Contenido",
      category: { name: "Noticias" },
      createdAt: "2026-01-01"
    });

    render(
      <MemoryRouter initialEntries={["/posts/p1"]}>
        <Routes>
          <Route path="/posts/:id" element={<PublicPostDetail />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Detalle")).toBeInTheDocument();
      expect(screen.getByText("Contenido")).toBeInTheDocument();
    });

    expect(getPublicPostById).toHaveBeenCalledWith("p1");
  });
});