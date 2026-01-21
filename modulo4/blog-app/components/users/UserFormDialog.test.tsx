import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserFormDialog from "./UserFormDialog";

describe("UserFormDialog", () => {
  test("en create requiere username/email/password y role, luego llama onSubmit", async () => {
    const user = userEvent.setup();
    const onSubmit = jest.fn();

    render(
      <UserFormDialog
        open
        mode="create"
        initial={null}
        onClose={() => undefined}
        onSubmit={onSubmit}
      />
    );

    expect(screen.getByText(/Nuevo usuario/i)).toBeInTheDocument();

    const btn = screen.getByRole("button", { name: /guardar/i });
    expect(btn).toBeDisabled();

    await user.type(screen.getByLabelText(/username/i), "francisco");
    await user.type(screen.getByLabelText(/email/i), "francisco@test.com");
    await user.type(screen.getByLabelText(/password/i), "123456");

    await user.click(screen.getByLabelText(/rol/i));
    await user.click(screen.getByRole("option", { name: /admin/i }));

    expect(btn).toBeEnabled();

    await user.click(btn);

    expect(onSubmit).toHaveBeenCalledWith({
      username: "francisco",
      email: "francisco@test.com",
      password: "123456",
      role: "admin"
    });
  });
});