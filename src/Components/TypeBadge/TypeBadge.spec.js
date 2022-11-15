import { ChakraProvider } from "@chakra-ui/react";
import { configure, render, screen } from "@testing-library/react";
import TypeBadge from "./TypeBadge";

configure({ testIdAttribute: "data-test" });

describe("TypeBadge - Unit tests", () => {
  it("should render TypeBadge with expected props ", () => {
    render(
      <ChakraProvider>
        <TypeBadge
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
    expect(screen.getByTestId("type-badge")).toBeInTheDocument();
  });
});
