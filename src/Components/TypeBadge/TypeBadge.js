import React from "react";
import PropTypes from "prop-types";

import { Badge, Flex } from "@chakra-ui/layout";

import typeToColor from "utils/typeToColor";

function TypeBadge({ types }) {
  const mapTypes = types.map(({ type }) => type);

  return (
    <Flex data-test="type-badge" margin="2" marginTop="5">
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
  );
}

TypeBadge.propTypes = {
  types: PropTypes.arrayOf(
    PropTypes.shape({
      slot: PropTypes.number,
      type: PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string,
      }),
    })
  ),
};

export default TypeBadge;
