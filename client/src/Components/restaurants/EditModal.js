import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class EditModal extends Component {
  constructor({ showEditModal, restaurantItem }) {
    super({ showEditModal });
    this.state = { editModal: showEditModal, itemData: restaurantItem };
  }
  // Modal box Cancel function
  handleCancel = () => {
    this.setState({
      editModal: false,
      name: "",
      startTime: "",
      endTime: "",
      status: "",
      foodItemArray: [],
    });
    this.props.getRestaurants();
  };

  render() {
    return (
      <div>
        <Modal show={this.state.editModal} onHide={this.handleCancel}>
          <form>
            <Modal.Header closeButton>
              <Modal.Title>Make Changes</Modal.Title>
            </Modal.Header>
            <Modal.Body>Edit Component</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCancel}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleOk}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
export default EditModal;
