import { render } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { expect, test, vi } from "vitest";
import VolumeControls from "../components/VolumeControls";

test("renders the volume control component correctly", () => {
  const mockOnVolumeChange = vi.fn();
  const { asFragment } = render(
    <VolumeControls volume={50} onVolumeChange={mockOnVolumeChange} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders the volume set to 0", () => {
  const mockOnVolumeChange = vi.fn();
  const { asFragment } = render(
    <VolumeControls volume={0} onVolumeChange={mockOnVolumeChange} />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("renders the volume set to 100", () => {
  const mockOnVolumeChange = vi.fn();
  const { asFragment } = render(
    <VolumeControls volume={100} onVolumeChange={mockOnVolumeChange} />
  );
  expect(asFragment()).toMatchSnapshot();
});
