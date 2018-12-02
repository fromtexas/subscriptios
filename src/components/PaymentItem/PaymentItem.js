import React from "react";
import PropTypes from "prop-types";
import { Block } from "../../styles/components";

export default function PaymentItem({ onClick, type, selected, children }) {
  return (
    <Block
      active={selected === type}
      grayscale={selected && selected !== type}
      onClick={() => {
        onClick(type);
      }}
    >
      {children}
    </Block>
  );
}

PaymentItem.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  selected: PropTypes.string,
  onClick: PropTypes.func
};
