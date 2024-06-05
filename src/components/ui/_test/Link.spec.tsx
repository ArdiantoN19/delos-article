import { render, screen } from "@testing-library/react";
import Link from "../Link";
import { MemoryRouter } from "react-router-dom";

describe("Link", () => {
  it("should render a link correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Link to={"/"}>Home</Link>
      </MemoryRouter>
    );
    const element = screen.getByText(/Home/i);

    expect(element).toBeInTheDocument();
  });
});
