import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  return (
    <>
      <h2>{props.title}</h2>
      {props.children}
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};

export default Header;
