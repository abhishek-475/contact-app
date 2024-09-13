import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { saveData } from "../service/allApis";
import { toast } from "react-toastify";

function AddContact({ response }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    mobile: "",
  });

  const handleClose = () => {
    setShow(false);
    setUser({
      username: "",
      email: "",
      mobile: "",
    });
  };

  const handleShow = () => setShow(true);

  const putUser = async () => {
    const { username, email, mobile } = user;

    if (!username || !email || !mobile) {
      toast.warning("Please enter all fields.");
      return;
    }

    try {
      const res = await saveData(user);
      if (res.status == 201) {
        toast.success("Contact added successfully");
        handleClose();
        response(res.data); 
      } else {
        toast.error("Failed to add contact: " );
      }
    } catch (error) {
      toast.error("An error occurred: " );
    }
  };

  return (
    <>
      <button className="btn btn-dark" onClick={handleShow}>
        <i className="fa-solid fa-user-plus" /> Add Contact
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control
                type="text"
                placeholder="John Doe"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="johndoe@gmail.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Number">
              <Form.Control
                type="tel"
                placeholder="+91"
                value={user.mobile}
                onChange={(e) => setUser({ ...user, mobile: e.target.value })}
              />
            </FloatingLabel>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={putUser}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddContact;
