import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test Case", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // });

  // afterEach(() => {
  //   console.log("after Each");
  // });

  // afterAll(() => {
  //   console.log("after All");
  // });

  test("Should Render contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading"); // Querying

    expect(heading).toBeInTheDocument(); // Assertion..
  });

  it("Should load Button inside contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("Should load 2 input boxs on the contact component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes).not.toBe(3);
  });
});
