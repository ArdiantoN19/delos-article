import { render, screen } from "@testing-library/react";
import Card from "../Card";

describe("Card", () => {
  it("should render a card correctly", () => {
    render(<Card>Badge</Card>);
    const element = screen.getByText("Badge");

    expect(element).toBeInTheDocument();
  });
});
