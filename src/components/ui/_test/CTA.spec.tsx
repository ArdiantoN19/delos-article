import { render, screen } from "@testing-library/react";
import Cta from "../CTA";

describe("CTA", () => {
  it("should render a cta correctly", () => {
    render(<Cta id="article" title="to article" />);
    const element = screen.getByTitle("to article");

    expect(element).toBeInTheDocument();
  });
});
