import React, { useState } from "react";
import Contacts from "../components/Contacts";
import AddContact from "../components/AddContact"; // Ensure correct casing
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [addResponse, setAddResponse] = useState("");

  return (
    <>
      <div className="d-flex justify-content-between p-4">
        <h1>Contacts</h1>

        <AddContact response={setAddResponse} />

        <Link to="/fav" aria-label="Go to Favorites">
          <button className="btn btn-dark">
            <i className="fa-regular fa-star" /> Favorites
          </button>
        </Link>
      </div>
      <div className="container-lg">
        <Row>
          <Col>
            <Contacts add={addResponse} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
