import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GITHUB_LINK, LINKEDIN_LINK } from "../../utils/constants";
import { Footer } from "./Footer";

describe("Footer Tests", () => {
  test("renders Footer Component", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyrights/i)).toBeInTheDocument();

    // Check for linkedin icon
    expect(screen.getByAltText(/Linkedin/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Linkedin/i })).toHaveAttribute(
      "href",
      LINKEDIN_LINK
    );

    // Check for github icon
    expect(screen.getByAltText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/i })).toHaveAttribute(
      "href",
      GITHUB_LINK
    );
  });
});
