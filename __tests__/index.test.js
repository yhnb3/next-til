import { render, screen } from "@testing-library/react";
import FirstPost from "../pages/posts/first-blog";

describe("First_post", () => {
  it("renders a heading", () => {
    render(<FirstPost />);

    const heading = screen.getByRole("heading", {
      name: /first-post/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
