import { ChakraProvider } from "@chakra-ui/react";
import { configure, render, screen } from "@testing-library/react";
import Home from "./Home";

configure({ testIdAttribute: "data-test" });

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Home - Unit Tests", () => {
  it("should render Home", () => {
    render(
      <ChakraProvider>
        <Home />
      </ChakraProvider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("pokemon-grid")).toBeInTheDocument();
    expect(mockedUsedNavigate).toBeTruthy();
  });
});
