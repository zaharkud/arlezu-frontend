import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";

const MockLoginPage = () => {
  return (
    <BrowserRouter>
      <LoginPage />
    </BrowserRouter>
  );
};

describe("Login", () => {
  beforeEach(() => {
    render(<MockLoginPage />);
  });

  it("should render header component with menu", () => {
    const header = screen.getByText(/arlezu/i);
    expect(header).toBeInTheDocument();
  });

  it("should render heading", () => {
    const heading = screen.getByText(/видеть/i);
    expect(heading).toBeInTheDocument();
  });

  it("should render working input for email", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
    userEvent.type(emailInput, "mail@mail.com");
    expect(emailInput).toHaveValue("mail@mail.com");
  });

  it("should render working input for password", () => {
    const passwordInput = screen.getByPlaceholderText("Пароль");
    expect(passwordInput).toBeInTheDocument();
    userEvent.type(passwordInput, "qwerty");
    expect(passwordInput).toHaveValue("qwerty");
  });
});
