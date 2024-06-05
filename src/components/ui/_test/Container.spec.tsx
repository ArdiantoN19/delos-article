import { render, screen } from "@testing-library/react";
import Container from "../Container";

describe("CONTAINER", () => {
  it("should render a badge correctly", () => {
    render(<Container title="container">TEST CONTAINER</Container>);
    const elementTitle = screen.getByTitle("container");
    const element = screen.getByText(/TEST CONTAINER/i);

    expect(element).toBeInTheDocument();
    expect(elementTitle).toBeInTheDocument();
  });
});
