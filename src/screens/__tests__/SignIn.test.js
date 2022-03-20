import react from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import SignIn from "../SignIn.dumb";

it("renders default elements", () => {
  const { getAllByText, getByPlaceholderText } = render(<SignIn />);

  expect(getAllByText("Login").length).toBe(2);
  expect(getByPlaceholderText("User"));
  expect(getByPlaceholderText("******"));
});

it("shows invalid username and password error message simultaneously", () => {
  const { getByTestId, getByText } = render(<SignIn />);

  fireEvent.press(getByTestId("SignIn.Button"));
  expect(getByText("Invalid username."));
  expect(getByText("Invalid password."));
});

describe("shows invalid username error message when", () => {
  it("has no input", () => {
    const { getByTestId, getByText, queryAllByText } = render(<SignIn />);

    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "password");
    fireEvent.press(getByTestId("SignIn.Button"));

    expect(getByText("Invalid username."));
    expect(queryAllByText("Invalid password.").length).toBe(0);
  });

  it("has an invalid input", () => {
    const { getByTestId, getByText, queryAllByText } = render(<SignIn />);

    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "invalid username");
    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "password");
    fireEvent.press(getByTestId("SignIn.Button"));

    expect(getByText("Invalid username."));
    expect(queryAllByText("Invalid password.").length).toBe(0);
  });
})

describe("shows invalid password error message when", () => {
  it("has no input", () => {
    const { getByTestId, getByText, queryAllByText } = render(<SignIn />);

    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "username");
    fireEvent.press(getByTestId("SignIn.Button"));

    expect(queryAllByText("Invalid username.").length).toBe(0);
    expect(getByText("Invalid password."));
  })

  it("has an invalid input", () => {
    const { getByTestId, getByText, queryAllByText } = render(<SignIn />);

    fireEvent.changeText(getByTestId("SignIn.usernameInput"), "username");
    fireEvent.changeText(getByTestId("SignIn.passwordInput"), "invalid password");
    fireEvent.press(getByTestId("SignIn.Button"));

    expect(queryAllByText("Invalid username.").length).toBe(0);
    expect(getByText("Invalid password."));
  })
})

it("handles valid input submission", async () => {
  const pushMock = jest.fn();
  const { getByTestId, queryAllByText } = render(<SignIn navigation={{ push: pushMock }} />);

  fetch.mockResponseOnce(JSON.stringify({ passes: true }))

  fireEvent.changeText(getByTestId("SignIn.usernameInput"), "username");
  fireEvent.changeText(getByTestId("SignIn.passwordInput"), "password");
  fireEvent.press(getByTestId("SignIn.Button"));

  expect(queryAllByText("Invalid username.").length).toBe(0);
  expect(queryAllByText("Invalid password.").length).toBe(0);

  expect(fetch.mock.calls).toMatchSnapshot();
  await waitFor(() => expect(pushMock).toHaveBeenCalledTimes(1))
  expect(pushMock).toBeCalledWith("Home");
})
