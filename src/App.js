import { useEffect, useState } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { Flex, SimpleGrid, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { extendTheme } from "@chakra-ui/react";

import Card from "./Components/Card/Card";
import getPokemon, { getUrl } from "./Gateway/PokemonGateway";

const theme = extendTheme({
  textStyles: {
    paragraph: {
      fontFamily: "sans-serif",
    },
  },
});

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemon().then(({ results }) => {
      results.forEach(({ url }) => {
        getUrl(url).then((pokemon) => {
          setPokemons((array) => [...array, pokemon]);
        });
      });
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Flex align="center" direction="column" marginBottom="5">
        <Text fontSize="6xl" marginBottom="5">
          Pokedex
        </Text>
        <Input placeholder="Pikachu..." maxWidth="sm" />
      </Flex>
      <SimpleGrid minChildWidth="350px" overflow="hidden">
        {pokemons?.map(
          ({
            name,
            types,
            sprites: {
              other: {
                home: { front_default },
              },
            },
          }) => (
            <Card name={name} picture={front_default} types={types} />
          )
        )}
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
