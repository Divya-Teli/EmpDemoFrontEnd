import React, { useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
export default function Header() {
  const [isOpen, setisOpen] = useState(false);
  const toggleCollapse = () => {
    setisOpen(!isOpen);
  };
  const logout=()=>{
    localStorage.removeItem('email')
  }
  return (
    <MDBNavbar color="indigo" dark expand="md">
      <MDBNavbarBrand>
        <strong className="white-text">Navbar</strong>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>
          <MDBNavItem active>
            <MDBNavLink to="/">Login</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem >
            <MDBNavLink to="/" onClick={logout}>Logout</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
}
