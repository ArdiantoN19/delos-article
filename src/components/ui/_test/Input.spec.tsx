import { render, screen } from "@testing-library/react";
import Input from "../Input";

describe("INPUT", () => {
  it("should render a input correctly", () => {
    render(<Input placeholder="test input here" />);
    const element = screen.getByPlaceholderText(/test input here/i);

    expect(element).toBeInTheDocument();
  });
});
