import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge", () => {
  it("should render a badge correctly", () => {
    render(<Badge>Badge</Badge>);
    const element = screen.getByText("Badge");

    expect(element).toBeInTheDocument();
  });
});
