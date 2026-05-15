import { render } from "@testing-library/react";
import { test } from "vitest";
import App from "@/App";

test("render <App />", () => {
  const { getByText } = render(<App />);
  const title = getByText("@getsoren/react-google-tag-manager");

  expect(title).toBeInTheDocument();
});
