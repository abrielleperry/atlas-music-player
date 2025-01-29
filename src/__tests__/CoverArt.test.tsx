import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import CoverArt from "../components/CoverArt";

test("CoverArt renders correctly with coverUrl", () => {
  const { asFragment } = render(
    <CoverArt coverUrl="http://localhost:5173/cover.jpg" />
  );
  expect(asFragment()).toMatchSnapshot();
});

test("CoverArt renders correctly with null coverUrl", () => {
  const { asFragment } = render(<CoverArt coverUrl={null} />);
  expect(asFragment()).toMatchSnapshot();
});
