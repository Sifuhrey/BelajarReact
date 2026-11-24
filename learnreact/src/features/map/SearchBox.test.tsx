import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it, vi } from "vitest";
import SearchBox from "./SearchBox";

it("does not search a blank query", async () => {
  const fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  const user = userEvent.setup();
  render(<SearchBox onLocationSelect={vi.fn()} />);

  await user.click(screen.getByRole("button", { name: "Search" }));

  expect(fetchMock).not.toHaveBeenCalled();
});
