import React from "react";
import PropTypes from "prop-types";
import { CheckboxWrap, Checkbox as CheckBox } from "../../styles/components";

export default function Checkbox({ onChange, checked, children }) {
  return (
    <CheckboxWrap>
      <CheckBox onChange={onChange} checked={checked} type={"checkbox"} />
      {children}
    </CheckboxWrap>
  );
}

Checkbox.defaultProps = {
  onChange: function() {},
  checked: false
};

Checkbox.propTypes = {
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  children: PropTypes.node
};
