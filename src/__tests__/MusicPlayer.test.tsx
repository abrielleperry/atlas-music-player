import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { test, expect, beforeAll, afterEach, afterAll } from "vitest";
import MusicPlayer from "../components/MusicPlayer";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Renders loading skeleton initially", () => {
  render(<MusicPlayer />);
  expect(screen.getByRole("status")).toBeInTheDocument();
});

test("renders the first song in the playlist by default", async () => {
  render(<MusicPlayer />);

  const firstSongTitle = await screen.findByText(/song one/i);
  expect(firstSongTitle).toBeInTheDocument();
});

test("changes current song when user clicks a playlist item", async () => {
  render(<MusicPlayer />);

  await screen.findByText(/song one/i);

  const songThree = await screen.findByText(/song three/i);

  fireEvent.click(songThree);

  const currentSongTitle = await screen.findByText(/song three/i);
  expect(currentSongTitle).toBeInTheDocument();
});
