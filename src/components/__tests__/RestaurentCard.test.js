import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "./mocks/resCardMock";
import "@testing-library/jest-dom";

it("Should Render Restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
