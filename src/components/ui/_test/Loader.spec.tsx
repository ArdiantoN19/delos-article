import { screen, render } from "@testing-library/react";
import Loader from "../Loader";

describe("Loader", () => {
  it("should render a loader", () => {
    render(<Loader />);
    expect(screen.getByTitle("loader")).toBeInTheDocument();
  });
});
