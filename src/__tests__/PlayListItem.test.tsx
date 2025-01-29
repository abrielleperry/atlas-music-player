import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect, test, vi } from "vitest";
import PlayListItem from "../components/PlayListItem";

test("renders PlayListItem component correctly", () => {
  const mockOnClick = vi.fn();
  const song = {
    id: "soammx6oibpan244my4toqke",
    title: "Tidal Drift",
    artist: "Echos of the Sea",
    duration: 240,
  };

  const { asFragment } = render(
    <PlayListItem song={song} isSelected={false} onClick={mockOnClick} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders PlayListItem component with selected state", () => {
  const mockOnClick = vi.fn();
  const song = {
    id: "a6pkp78whsyqdvpb5dxn64ss",
    title: "Fading Shadows",
    artist: "The Emberlight",
    duration: 240,
  };

  const { asFragment } = render(
    <PlayListItem song={song} isSelected={true} onClick={mockOnClick} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders PlayListItem component with different song", () => {
  const mockOnClick = vi.fn();
  const song = {
    id: "hdees11mmk6g078ewijlly1r",
    title: "Cosmic Drift",
    artist: "Solar Flare",
    duration: 300,
  };

  const { asFragment } = render(
    <PlayListItem song={song} isSelected={false} onClick={mockOnClick} />
  );
  expect(asFragment()).toMatchSnapshot();
});
