import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
// import { counterActions } from "../../store/reducer";
import AuthForm from "../Auth/AuthForm";
import MainNavigation from "../Layout/MainNavigation";

function NavBar() {
  // const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">SubApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              {/* <AuthForm Login /> */}
              <Nav.Link href="#link">Subscription</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              {/* <Nav.Link onClick={increment}>increment</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <AuthForm Login /> */}
      <AuthForm />
      <div>this is an addition</div>
    </>
  );
}

export default NavBar;
