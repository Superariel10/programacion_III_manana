import React from "react";
import { screen, waitFor } from "@testing-library/react";
import PublicHome from "./PublicHome";
import { renderWithRouter } from "../../test/testUtils";
import { getPublicPosts } from "../../services/posts.service";

jest.mock("../../services/posts.service", () => ({
  getPublicPosts: jest.fn()
}));

describe("PublicHome", () => {
  test("carga y muestra posts", async () => {
    (getPublicPosts as jest.Mock).mockResolvedValue({
      items: [
        { id: "p1", title: "Post 1", content: "c1", excerpt: "ex1", category: { name: "Noticias" } },
        { id: "p2", title: "Post 2", content: "c2", excerpt: "ex2", category: { name: "Eventos" } }
      ],
      page: 1,
      limit: 10,
      total: 2,
      totalPages: 1
    });

    renderWithRouter(<PublicHome />, { route: "/?page=1" });

    await waitFor(() => {
      expect(screen.getByText("Post 1")).toBeInTheDocument();
      expect(screen.getByText("Post 2")).toBeInTheDocument();
    });

    expect(getPublicPosts).toHaveBeenCalled();
  });

  test("muestra error si falla la API", async () => {
    (getPublicPosts as jest.Mock).mockRejectedValue(new Error("boom"));

    renderWithRouter(<PublicHome />);

    await waitFor(() => {
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });
  });
});