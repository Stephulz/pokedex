import { QuestionIcon } from "@chakra-ui/icons";
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Box,
  Stack,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Tooltip,
  Text,
  Image,
} from "@chakra-ui/react";
import TypeBadge from "components/TypeBadge/TypeBadge";
import { getPokemon } from "gateway/PokemonGateway";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    getPokemon(id).then((result) => {
      console.log("RESULT: ", result);
      setPokemon(result);
    });
  }, []);

  return (
    <>
      {pokemon && (
        <Flex alignItems="center" justifyContent="center" height="100vh">
          <Card data-test={`pokemon-${id}`} alignItems="center">
            <CardHeader>
              <Text fontSize="4xl" textStyle="paragraph" casing="capitalize">
                {pokemon.name}
              </Text>
            </CardHeader>
            <Image
              boxSize="250px"
              src={pokemon.sprites.other.home.front_default}
              alt={pokemon.name}
            />
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <TypeBadge types={pokemon?.types} />
                <Box>
                  <Heading size="m" textTransform="uppercase">
                    Stats
                  </Heading>
                  <Flex direction="row">
                    {pokemon.stats.map(({ base_stat, stat }) => (
                      <Stat key={stat.name}>
                        <StatLabel size="sm">{stat.name}</StatLabel>
                        <StatNumber size="sm">{base_stat}</StatNumber>
                      </Stat>
                    ))}
                  </Flex>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Abilities
                  </Heading>
                  <Flex direction="row">
                    {pokemon.abilities.map(({ ability, slot }) => (
                      <Stat key={slot}>
                        <StatLabel>
                          {ability.name}
                          <Tooltip
                            hasArrow
                            label="TODO get ability description"
                          >
                            <QuestionIcon w={6} h={6} />
                          </Tooltip>
                        </StatLabel>
                      </Stat>
                    ))}
                  </Flex>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      )}
    </>
  );
}

export default Pokemon;
