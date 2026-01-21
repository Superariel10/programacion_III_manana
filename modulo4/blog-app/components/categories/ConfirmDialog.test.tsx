import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ConfirmDialog from "./ConfirmDialog";

describe("ConfirmDialog", () => {
  test("muestra contenido y ejecuta callbacks", async () => {
    const user = userEvent.setup();
    const onCancel = jest.fn();
    const onConfirm = jest.fn();

    render(
      <ConfirmDialog
        open
        title="Confirmar"
        description="¿Seguro?"
        cancelText="No"
        confirmText="Sí"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    );

    expect(screen.getByText("Confirmar")).toBeInTheDocument();
    expect(screen.getByText("¿Seguro?")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "No" }));
    expect(onCancel).toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Sí" }));
    expect(onConfirm).toHaveBeenCalled();
  });
});