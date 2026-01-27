import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Register from "./Register";
import { renderWithRouter } from "../../test/testUtils";

const registerMock = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    register: registerMock
  })
}));

describe("Register", () => {
  beforeEach(() => {
    registerMock.mockReset();
  });

  test("envía datos con useAuth().register", async () => {
    const user = userEvent.setup();
    renderWithRouter(<Register />);

    await user.type(screen.getByLabelText(/username/i), "francisco");
    await user.type(screen.getByLabelText(/email/i), "francisco@test.com");
    await user.type(screen.getByLabelText(/password/i), "123456");
    await user.click(screen.getByRole("button", { name: /crear cuenta/i }));

    expect(registerMock).toHaveBeenCalledWith({
      username: "francisco",
      email: "francisco@test.com",
      password: "123456"
    });
  });
});