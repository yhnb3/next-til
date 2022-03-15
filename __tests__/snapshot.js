import { render } from "@testing-library/react";
import FirstPost from "../pages/posts/first-blog";

it("renders homepage unchanged", () => {
  const { container } = render(<FirstPost />);
  expect(container).toMatchSnapshot();
});
