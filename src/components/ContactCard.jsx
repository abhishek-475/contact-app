import React, { useState } from "react";
import {
  deleteContact,
  updateContact,
  toggleFavorite,
} from "../service/allApis";
import { toast } from "react-toastify";
import { Modal, Button, Form } from "react-bootstrap";

function ContactCard({ contact, refreshContacts }) {
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState({
    username: contact.username || "",
    email: contact.email || "",
    mobile: contact.mobile || "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    try {
      const res = await deleteContact(contact.id);
      if (res.status === 200) {
        toast.success("Contact deleted successfully!");
        refreshContacts();
      } else {
        toast.error("Failed to delete contact!");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the contact!");
    }
  };

  const handleEdit = () => {
    setEditData({
      username: contact.username,
      email: contact.email,
      mobile: contact.mobile,
    });
    handleShow();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSaveChanges = async () => {
    try {
      const res = await updateContact(contact.id, editData);
      if (res.status === 200) {
        toast.success("Contact updated successfully!");
        handleClose();
        refreshContacts();
      } else {
        toast.error("Failed to update contact!");
      }
    } catch (error) {
      toast.error("An error occurred while updating the contact!");
    }
  };

  const handleToggleFavorite = async (id) => {
    try {
      const res = await toggleFavorite(id);
      if (res.status === 200) {
        toast.success("Favorite status updated!");
        refreshContacts();
      } else {
        toast.error("Failed to update favorite status!");
      }
    } catch (error) {
      toast.error("An error occurred while updating favorite status!");
    }
  };

  return (
    <>
      <tr>
        <td>{contact.id}</td>
        <td>{contact.username}</td>
        <td>{contact.email}</td>
        <td>{contact.mobile}</td>
        <td className="btn">
          <i
            className="fa-solid fa-user-pen"
            style={{ color: "#060d19", cursor: "pointer" }}
            onClick={handleEdit}
          />
        </td>
        <td className="btn">
          <i
            className="fa-solid fa-trash-can"
            style={{ color: "#e30d0d", cursor: "pointer" }}
            onClick={handleDelete}
          />
        </td>
        <td className="btn">
          <i
            className="fa-solid fa-star"
            style={{
              color: contact.isFavorite ? "#FFD700" : "#d3d3d3",
              cursor: "pointer",
            }}
            onClick={() => handleToggleFavorite(contact.id)}
          />
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={editData.username}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editData.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="mobile"
                value={editData.mobile}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactCard;
