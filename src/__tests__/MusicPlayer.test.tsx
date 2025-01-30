import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { server } from "../mocks/server";
import MusicPlayer from "../components/MusicPlayer";
import { afterEach, beforeAll, afterAll, test, expect } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Renders loading skeleton initially", () => {
  render(<MusicPlayer />);
  expect(screen.getByRole("status")).toBeInTheDocument();
});

test("loads and displays playlist", async () => {
  render(<MusicPlayer />);

  await waitFor(() => {
    expect(screen.getByText("Painted in Blue")).toBeInTheDocument();
  });
});
