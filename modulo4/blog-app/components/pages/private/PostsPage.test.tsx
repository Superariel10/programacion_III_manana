import React from "react";
import { screen, waitFor } from "@testing-library/react";
import PostsPage from "./PostsPage";
import { renderWithRouter } from "../../test/testUtils";

import { getPosts } from "../../services/posts.service";
import { getCategories } from "../../services/categories.service";

jest.mock("../../services/posts.service", () => ({
  getPosts: jest.fn(),
  createPost: jest.fn(),
  updatePost: jest.fn(),
  deletePost: jest.fn()
}));

jest.mock("../../services/categories.service", () => ({
  getCategories: jest.fn()
}));

jest.mock("../../context/UiContext", () => ({
  useUi: () => ({ notify: jest.fn() })
}));

describe("PostsPage", () => {
  test("carga y muestra posts", async () => {
    (getCategories as jest.Mock).mockResolvedValue({
      items: [{ id: "c1", name: "Noticias" }],
      page: 1,
      limit: 100,
      total: 1,
      totalPages: 1
    });

    (getPosts as jest.Mock).mockResolvedValue({
      items: [{ id: "p1", title: "Post Admin", content: "X", category: { name: "Noticias" } }],
      page: 1,
      limit: 10,
      total: 1,
      totalPages: 1
    });

    renderWithRouter(<PostsPage />, { route: "/dashboard/posts?page=1" });

    await waitFor(() => {
      expect(screen.getByText("Post Admin")).toBeInTheDocument();
    });

    expect(getPosts).toHaveBeenCalled();
  });
});