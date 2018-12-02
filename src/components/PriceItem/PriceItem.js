import React from "react";
import PropTypes from "prop-types";
import { SubBlock } from "../../styles/components";

export function PriceItem({ onClick, price, selected, children }) {
  return (
    <SubBlock
      active={selected.val === price.val}
      onClick={() => {
        onClick(price);
      }}
    >
      {children}
    </SubBlock>
  );
}

PriceItem.propTypes = {
  children: PropTypes.node,
  price: PropTypes.object,
  selected: PropTypes.object,
  onClick: PropTypes.func
};
