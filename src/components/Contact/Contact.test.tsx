// Contact.test.tsx

import { Contact } from "./Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const EMAIL = "test@example.com";
const PHONE = "123-456-7890";

jest.mock("../../utils/constants.ts", () => ({
  EMAIL: EMAIL,
  PHONE: PHONE,
}));

describe("Contact Component", () => {
  test("renders contact section with email and phone", () => {
    render(<Contact />);

    expect(screen.getByText(/contact/i)).toBeInTheDocument();

    // Check for email link and icon
    expect(screen.getByAltText(/email address/i)).toBeInTheDocument();
    expect(screen.getByText(EMAIL)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: EMAIL })).toHaveAttribute(
      "href",
      `mailto:${EMAIL}`
    );

    // Check for phone link and icon
    expect(screen.getByAltText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByText(PHONE)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: PHONE })).toHaveAttribute(
      "href",
      `tel:${PHONE}`
    );
  });
});
