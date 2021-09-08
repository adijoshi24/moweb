import React, { Component } from "react";
import axios from "axios";
import { Modal, Button, Form, Col } from "react-bootstrap";
import TimePicker from "react-bootstrap-time-picker";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";

class AddRestaurant extends Component {
  constructor({ showAddModal, foodItemArray }) {
    super({ showAddModal });
    this.state = {
      modal: showAddModal,
      foodItemArray: foodItemArray,
    };
  }

  // Onchange function for input fields
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Submit function. POST API
  handleOk = () => {
    const postData = {
      name: this.state.name,
      foodItems: this.state.foodItemSelected,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      status: this.state.status,
    };
    axios
      .post("http://localhost:3001/api/restaurants/add", postData)
      .then((res) => {
        this.props.getRestaurants();
        this.setState({
          modal: false,
          name: "",
          startTime: "",
          endTime: "",
          status: "",
        });
      })
      .catch((err) => {
        this.setState({
          // modal: true,
        });
      });
  };

  // Modal box Cancel function
  handleCancel = () => {
    this.setState({
      modal: false,
      name: "",
      startTime: "",
      endTime: "",
      status: "",
    });
    this.props.getRestaurants();
  };

  // Onchange function for startTime
  handleStartTimeChange = (startTime) => {
    this.setState({ startTime: startTime });
  };

  // Onchange function for endTime
  handleEndTimeChange = (endTime) => {
    this.setState({ endTime: endTime });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div>
        <Modal show={this.state.modal} onHide={this.handleCancel}>
          <form>
            <Modal.Header closeButton>
              <Modal.Title>Add a Restaurant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Restaurant Name:</label>
              <br></br>
              <input
                onChange={(e) => this.onChange(e)}
                className="form-control"
                placeholder="Restaurant Name"
                type="text"
                name="name"
              />
              <br></br>
              <label>Food Items:</label>
              <DropdownMultiselect
                handleOnChange={(selected) => {
                  this.setState({ foodItemSelected: selected });
                }}
                options={this.state.foodItemArray && this.state.foodItemArray}
              />
              <br></br>
              <label>Status: </label>
              <input
                type="radio"
                id="active"
                name="status"
                value="Active"
                style={{ marginLeft: "10px" }}
                onChange={(e) => this.onChange(e)}
              />
                <label for="active">Active</label>
              <input
                type="radio"
                id="inactive"
                name="status"
                value="Inactive"
                style={{ marginLeft: "10px" }}
                onChange={(e) => this.onChange(e)}
              />
                <label for="inactive">Inactive</label>
              <br />
              <br></br>
              <label>Opening Time:</label>
              <TimePicker
                onChange={(e) => this.handleStartTimeChange(e)}
                value={this.state.startTime}
                step={30}
              />
              <br></br>
              <label>Closing Time:</label>
              <TimePicker
                onChange={(e) => this.handleEndTimeChange(e)}
                value={this.state.endTime}
                step={30}
              />
              <br></br>
            </Modal.Body>
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
export default AddRestaurant;
