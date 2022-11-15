import { useEffect, useState } from "react";

import { SimpleGrid, Flex, Text } from "@chakra-ui/layout";

import { getPokemon, getUrl, getPokemonByName } from "gateway/PokemonGateway";

import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import { FormControl, Input, Center } from "@chakra-ui/react";

function Home() {
  const navigate = useNavigate();
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const randomOffset = Math.floor(Math.random() * (1118 + 15) + 15);

  useEffect(() => {
    getPokemon("", randomOffset).then(({ results }) => {
      results.forEach(({ url }) => {
        getUrl(url).then((pokemon) => {
          setPokemons((array) => [...array, pokemon]);
        });
      });
    });
  }, []);

  const handleClick = (id) => {
    navigate(`/pokemon/${id}`);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    getPokemonByName(search);
    setLoading(false);
  };

  return (
    <>
      <Flex
        data-test="header"
        align="center"
        direction="column"
        marginBottom="5"
      >
        <Text fontSize="6xl" marginBottom="5">
          Pokedex
        </Text>
        <FormControl onSubmit={onFormSubmit}>
          <Center>
            <Input
              style={{ textAlign: "center" }}
              placeholder="Search"
              _placeholder={{
                textAlign: "center",
              }}
              value={search}
              size="md"
              width="30vw"
              onChange={(e) => handleSearch(e)}
              disabled={loading}
            />
          </Center>
        </FormControl>
      </Flex>

      <SimpleGrid
        data-test="pokemon-grid"
        minChildWidth="350px"
        overflow="hidden"
      >
        {pokemons?.map(
          ({
            id,
            name,
            types,
            sprites: {
              other: {
                home: { front_default },
              },
            },
          }) => (
            <Card
              key={id}
              name={name}
              picture={front_default}
              types={types}
              onClick={() => handleClick(id)}
            />
          )
        )}
      </SimpleGrid>
    </>
  );
}

export default Home;
