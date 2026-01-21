import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";
import { renderWithRouter } from "../../test/testUtils";

const loginMock = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    login: loginMock
  })
}));

describe("Login", () => {
  beforeEach(() => {
    loginMock.mockReset();
  });

  test("envía credenciales con useAuth().login", async () => {
    const user = userEvent.setup();

    renderWithRouter(<Login />);

    await user.type(screen.getByLabelText(/username/i), "francisco");
    await user.type(screen.getByLabelText(/password/i), "123456");

    await user.click(screen.getByRole("button", { name: /ingresar/i }));

    expect(loginMock).toHaveBeenCalledWith({ username: "francisco", password: "123456" });
  });
});