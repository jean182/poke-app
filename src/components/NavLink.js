import React from "react";
import { Link } from "@reach/router";

const NavLink = props => {
  return (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      const activeColor = isCurrent ? "text-boston-red" : ""
      return {
        className: `${props.className} ${activeColor}`
      };
    }}
  /> )
};

export default NavLink;
