import { ChakraProvider } from "@chakra-ui/react";
import { configure, render, screen } from "@testing-library/react";
import Card from "./Card";

configure({ testIdAttribute: "data-test" });

describe("Card - Unit tests", () => {
  it("should render card with expected props ", () => {
    render(
      <ChakraProvider>
        <Card
          name="Pikachu"
          picture="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
          types={[
            {
              slot: 1,
              type: {
                name: "electric",
                url: "https://pokeapi.co/api/v2/type/12/",
              },
            },
          ]}
        />
      </ChakraProvider>
    );
    expect(screen.queryByTestId("card-Pikachu")).toBeInTheDocument();
  });
});
