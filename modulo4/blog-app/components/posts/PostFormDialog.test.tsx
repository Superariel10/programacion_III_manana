import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PostFormDialog from "./PostFormDialog";

describe("PostFormDialog", () => {
  test("permite crear post y llama onSubmit", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();

    render(
      <PostFormDialog
        open
        mode="create"
        initial={null}
        categories={[
          { id: "c1", name: "Noticias" },
          { id: "c2", name: "Eventos" }
        ] as any}
        onClose={() => undefined}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByText(/Nuevo post/i)).toBeInTheDocument();

    await user.type(screen.getByLabelText(/título/i), "Mi primer post");
    await user.type(screen.getByLabelText(/contenido/i), "Contenido de prueba");

    // Select MUI: click para abrir y escoger opción
    await user.click(screen.getByLabelText(/categoría/i));
    await user.click(screen.getByRole("option", { name: "Noticias" }));

    await user.click(screen.getByRole("button", { name: /guardar/i }));

    expect(onSubmit).toHaveBeenCalledWith({
      title: "Mi primer post",
      content: "Contenido de prueba",
      categoryId: "c1"
    });
  });
});