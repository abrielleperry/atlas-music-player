import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import SongTitle from "../components/SongTitle";

test("SongTitle renders with title and artist", () => {
  const { asFragment } = render(
    <SongTitle title="Painted in Blue" artist="Soul Canvas" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("SongTitle renders when title and artist are empty", () => {
  const { asFragment } = render(<SongTitle title="" artist="" />);
  expect(asFragment()).toMatchSnapshot();
});
