import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  test("should render a button correctly", () => {
    render(<Button>Button</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
