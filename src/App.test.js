import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Coming Soon<e", () => {
  render(<App />);
  const linkElement = screen.getByText(/Coming Soon<t/i);
  expect(linkElement).toBeInTheDocument();
});
