import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryFormDialog from "./CategoryFormDialog";

describe("CategoryFormDialog", () => {
  test("renderiza título y permite guardar cuando name tiene valor", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    const onSubmit = jest.fn();

    render(
      <CategoryFormDialog
        open
        mode="create"
        initial={null}
        onClose={onClose}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByText(/Nueva categoría/i)).toBeInTheDocument();

    const btnGuardar = screen.getByRole("button", { name: /guardar/i });
    expect(btnGuardar).toBeDisabled();

    await user.type(screen.getByLabelText(/nombre/i), "Tecnología");
    expect(btnGuardar).toBeEnabled();

    await user.click(btnGuardar);
    expect(onSubmit).toHaveBeenCalledWith({ name: "Tecnología" });
  });

  test("en modo edit precarga el nombre", () => {
    render(
      <CategoryFormDialog
        open
        mode="edit"
        initial={{ id: "1", name: "Ciencia" } as any}
        onClose={() => undefined}
        onSubmit={() => undefined}
      />
    );

    expect(screen.getByText(/Editar categoría/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue("Ciencia")).toBeInTheDocument();
  });
});