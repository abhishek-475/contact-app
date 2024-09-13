import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="container-fluid">
      <Row>
        <Col className="p-5" sm={12} md={5}>
          <h2>
            <i
              className="fa-regular fa-address-book fa-lg"
              style={{ color: "#010029" }}
            />{" "}
            Contact
          </h2>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            laborum assumenda veniam saepe perferendis. Earum molestias
            possimus distinctio vitae omnis veritatis, id hic, ut dolorem
            nobis, animi laborum nesciunt tempora. Debitis ea ipsum voluptatum
            enim rerum est quis a corporis dolor omnis nostrum deleniti
            voluptas id voluptatibus perferendis facere, cumque nihil
            consequuntur harum explicabo? Eligendi voluptatum enim facere quo
            nisi.
          </p>
          <div className="d-grid">
            <Link to="/home" className="btn btn-outline-dark">
              Let's Go
            </Link>
          </div>
        </Col>
        <Col className="py-4" sm={12} md={7}>
          <img
            src="https://blog.phonehouse.es/wp-content/uploads/2020/02/iconos-contactos-google-1-6-700x300-1.jpg"
            style={{ width: "85%" }}
            alt="Contact management illustration"
          />
        </Col>
      </Row>
    </div>
  );
}

export default Landing;
