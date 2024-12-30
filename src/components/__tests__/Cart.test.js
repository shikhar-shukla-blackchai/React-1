import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { act } from "react";
import Cart from "../Cart";
import MOCK_DATA_NAME from "./mocks/mockResMenu.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("Should load Restaurent Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Cheese Volcano (8)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  expect(screen.getByText("Cart (0)")).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart (1)")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart (2)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(10);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(8);

  expect(
    screen.getByText("Eat something before you die ☠☠")
  ).toBeInTheDocument();
});
