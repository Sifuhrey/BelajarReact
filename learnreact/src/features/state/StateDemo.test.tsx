import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import StateDemo from "./StateDemo";

it("updates age and reflects the entered name and checkbox state", async () => {
  const user = userEvent.setup();
  render(<StateDemo />);

  await user.type(screen.getByPlaceholderText("Masukkan nama"), "Ayu");
  expect(screen.getByText("Umur Ayu adalah 20 tahun.")).toBeTruthy();

  await user.click(screen.getByRole("button", { name: "Tambah Usia" }));
  expect(screen.getByText("Umur Ayu adalah 21 tahun.")).toBeTruthy();

  await user.click(screen.getByRole("button", { name: "Kurangi Usia" }));
  expect(screen.getByText("Umur Ayu adalah 20 tahun.")).toBeTruthy();

  expect(screen.getByText("The user Ayu has not understood this.")).toBeTruthy();
  await user.click(screen.getByRole("checkbox", { name: "I understand this" }));
  expect(screen.getByText("The user Ayu has understood this.")).toBeTruthy();
});

