import { render, screen } from "@testing-library/react";
import BadLink from "./BadLink";

describe("BadLink", () => {
  it("should render", () => {
    render(<BadLink href="/foo">Foo</BadLink>);
    expect(screen.getByText("Foo")).toBeInTheDocument();
  });
});
