import React from "react";
import styled from "styled-components";
import { Navbar as BootstrapNavbar, Nav, NavDropdown } from "react-bootstrap";

import { Logo, Button } from "lib/components";

const Container = styled(BootstrapNavbar)`
  height: 100%;
  padding: 0 1rem;
  @media only screen and (min-width: 2250px) {
    padding: 0 25rem;
  }

  @media only screen and (min-width: 1800px) and (max-width: 2249px) {
    padding: 0 10rem;
  }
`;

const Collapse = styled(BootstrapNavbar.Collapse)`
  z-index: 99;

  @media only screen and (max-width: 992px) {
    padding-left: 1rem;
    padding-bottom: 1rem;
    background-color: #f5f3f0;
    border-radius: 5px;
  }

  button {
    margin-left: 3rem;

    @media only screen and (max-width: 992px) {
      margin-left: 0;
      padding: 6px 12px;
    }
  }
`;

const NavContainer = styled(Nav)`
  a {
    font-weight: 600;
    font-size: 18px;
    line-height: 48px;
    color: #000000 !important;
  }

  .dropdown-menu {
    border-radius: 10px;
    padding-bottom: 1rem;
    border: 0;
    box-shadow: 0px 8px 10px 0px #cbbeb5;

    @media only screen and (max-width: 992px) {
      border: 0px;
      background-color: #f5f3f0;
      box-shadow: none;
    }

    a {
      font-size: 15px;
    }
  }

  .dropdown-item {
    line-height: 30px;
  }
`;

export const Navbar = () => {
  return (
    <Container expand="lg">
      <Logo />
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <Collapse id="basic-navbar-nav" className="justify-content-end">
        <NavContainer className="mr-auto">
          <Nav.Link href="/blog">Blog</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <NavDropdown title="More" id="basic-nav-dropdown">
            <NavDropdown.Item href="/pricing">Pricing</NavDropdown.Item>
            <NavDropdown.Item href="/how-it-works">
              How it works
            </NavDropdown.Item>
            <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
          </NavDropdown>
        </NavContainer>
        <Button rounded={+true}>Sign Up</Button>
      </Collapse>
    </Container>
  );
};
