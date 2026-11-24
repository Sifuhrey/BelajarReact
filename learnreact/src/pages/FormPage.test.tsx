import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { afterEach, expect, it, vi } from "vitest";
import FormPage from "./FormPage";

function renderForm() {
  return render(
    <MemoryRouter>
      <FormPage />
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

it("shows validation errors when submitted empty", async () => {
  const user = userEvent.setup();
  renderForm();

  await user.click(screen.getByRole("button", { name: "Submit" }));

  expect(await screen.findAllByText("Required")).toHaveLength(4);
  expect(screen.getByText("You must accept the terms and conditions.")).toBeTruthy();
});

it("validates field limits and formats", async () => {
  const user = userEvent.setup();
  renderForm();

  await user.type(screen.getByLabelText("First Name"), "abcdefghijklmnop");
  await user.type(screen.getByLabelText("Last Name"), "abcdefghijklmnopqrstu");
  await user.type(screen.getByLabelText("Email Address"), "not-an-email");
  await user.click(screen.getByRole("button", { name: "Submit" }));

  expect(await screen.findByText("Must be 15 characters or less")).toBeTruthy();
  expect(screen.getByText("Must be 20 characters or less")).toBeTruthy();
  expect(screen.getByText("Invalid email address")).toBeTruthy();
});

it("submits valid values after accepting the terms", async () => {
  const user = userEvent.setup();
  const alert = vi.spyOn(window, "alert").mockImplementation(() => {});
  renderForm();

  await user.type(screen.getByLabelText("First Name"), "Jane");
  await user.type(screen.getByLabelText("Last Name"), "Doe");
  await user.type(screen.getByLabelText("Email Address"), "jane@doe.com");
  await user.selectOptions(screen.getByRole("combobox"), "development");
  await user.click(screen.getByRole("checkbox", { name: /accept the terms/i }));
  await user.click(screen.getByRole("button", { name: "Submit" }));

  await waitFor(() => expect(alert).toHaveBeenCalledOnce());
  expect(alert).toHaveBeenCalledWith(
    JSON.stringify(
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane@doe.com",
        acceptTerms: true,
        jobType: "development",
      },
      null,
      2,
    ),
  );
});
