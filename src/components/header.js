import PropTypes from "prop-types"
import React, { useState } from "react"

import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  NavbarToggler,
} from 'reactstrap';

const Header = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className= "navbar" light expand="sm">
          <NavbarToggler onClick = {toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar className = "justify-content-center">
            <Nav className="d-flex justify-content-center" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavbarText className = 'disappear'> x </NavbarText>
              <NavItem>
                <NavLink href="/rodeoroundup">Rodeo Round Up</NavLink>
              </NavItem>
              <NavbarText className = 'disappear'> x </NavbarText>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
  );
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
