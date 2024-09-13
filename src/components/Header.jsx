import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar className="bg-body-darker">
        <Container>
          <Navbar.Brand href="#home">
            <i
              className="fa-regular fa-address-book fa-lg"
              style={{ color: "#010029" }}
            />{" "}
            Contact
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
