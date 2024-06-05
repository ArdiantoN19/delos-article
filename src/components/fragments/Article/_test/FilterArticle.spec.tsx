import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FilterArticle from "../FilterArticle";
import { MemoryRouter } from "react-router-dom";

describe("Filter Article", () => {
  it("should be render correctly", async () => {
    render(
      <MemoryRouter>
        <FilterArticle />
      </MemoryRouter>
    );
    expect(screen.getByText("all")).toBeInTheDocument();
    expect(screen.getByText("emailed")).toBeInTheDocument();
    expect(screen.getByText("shared")).toBeInTheDocument();
    expect(screen.getByText("viewed")).toBeInTheDocument();
  });

  xit("should be push filter when click button", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <FilterArticle />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const element = screen.getByText(/emailed/i);
    await user.click(element);

    const searchParams = new URLSearchParams(window.location.search);
    console.log({ filter: searchParams.get("filter") });
    expect(searchParams.get("filter")).toBe("emailed");
  });
});
