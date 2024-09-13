import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-dark container-fluid ">
        <Row className="p-5">
          <Col sm={12} md={5}>
            <h3>Contact 2024</h3>
            <p style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              minus obcaecati nam. Autem quisquam ipsa asperiores at cupiditate
              sed molestias ipsum repellendus ullam, tempore omnis corporis
              officiis ad eos eaque.
            </p>
          </Col>
          <Col sm={12} md={2}>
            <h3>Links</h3>
            <div className="d-flex flex-column">
              <Link to={"/"}>Landing</Link>
              <Link to={"/home"}>Home</Link>
              <Link to={"/fav"}>Favourites</Link>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <h3>FeedBack</h3>
            <textarea name="" id="" className="form-control"></textarea>
            <button className="btn btn-success mt-4">Send</button>
          </Col>
        </Row>
        <p className="text-center">Contact &copy; 2024 All rights reserved</p>
      </div>
    </>
  );
}

export default Footer;
