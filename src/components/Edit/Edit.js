import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { edit } from "../../reduxFiles/action/action";

function Edit({ task }) {
  const [show, setShow] = useState(false);
  const [newText, setnewText] = useState();

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit = () => {
    dispatch(edit(task.id, newText));
    handleClose();
  };

  return (
    <div>
      <>
        <button variant="primary" onClick={handleShow}>
          Edit
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              type="text"
              value={newText}
              onChange={(e) => setnewText(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Edit;
