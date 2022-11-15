import { ChakraProvider } from "@chakra-ui/react";
import { configure, render, screen } from "@testing-library/react";
import Pokemon from "./Pokemon";
import axios from "axios";

configure({ testIdAttribute: "data-test" });

const useParamsValue = { id: 1 };
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => useParamsValue,
}));

const mockData = {
  data: {
    name: "pidove",
    abilities: [
      {
        ability: {
          name: "big-pecks",
          url: "https://pokeapi.co/api/v2/ability/145/",
        },
        is_hidden: false,
        slot: 1,
      },
    ],
    sprites: [
      {
        other: {
          home: {
            front_default:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/519.png",
          },
        },
      },
    ],
    types: [
      {
        slot: 1,
        type: {
          name: "normal",
          url: "https://pokeapi.co/api/v2/type/1/",
        },
      },
    ],
  },
};

describe("Pokemon - Unit Tests", () => {
  it("should render Pokemon with success", async () => {
    render(
      <ChakraProvider>
        <Pokemon />
      </ChakraProvider>
    );

    expect(screen.getByTestId("pokemon-1")).toBeInTheDocument();
  });
});
