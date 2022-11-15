import React from "react";
import PropTypes from "prop-types";

import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import typeToColor from "utils/typeToColor";

function Card({ name, picture, types, onClick }) {
  const mapTypes = types.map(({ type }) => type);

  const handleTypesToGradient = () => {
    const colors = mapTypes.map(({ name }) => typeToColor.get(name));

    return mapTypes.length === 1
      ? `${colors[0]}, rgba(0, 0, 0, 0.10)`
      : mapTypes.map(({ name }) => typeToColor.get(name)).join(",");
  };

  return (
    <Box
      data-test={`card-${name}`}
      borderWidth="1px"
      borderRadius="lg"
      borderStyle="hidden"
      overflow="hidden"
      maxW="xs"
      minW="xs"
      bgGradient={`linear(to-br, ${handleTypesToGradient()})`}
      transition="all .2s ease-in-out;"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.33) 0px 20px 43px",
        transform: "translate3d(0px, -3px, 0px);",
        cursor: "pointer",
      }}
      padding="3"
      margin="5"
      onClick={onClick}
    >
      <Flex align="center" direction="column">
        <Text fontSize="4xl" textStyle="paragraph" casing="capitalize">
          {name}
        </Text>
        <Image boxSize="150px" src={picture} alt={name} />
        <Flex margin="2" marginTop="5">
          {mapTypes.map(({ name }) => (
            <Badge
              key={name}
              margin="1"
              bgColor={typeToColor.get(name)}
              color="white"
            >
              {name}
            </Badge>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      slot: PropTypes.number,
      type: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
    })
  ),
  onClick: PropTypes.func,
};

export default Card;
