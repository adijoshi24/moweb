import React, { Component } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";

const dummyImg =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ8NDQ0NDg4PDQ0PDxAODRANFQ4NFRUWFhUXFRgYHSggGBsxGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAQUGBAMC/8QAOxABAAIBAAcEBwUGBwAAAAAAAAECAwQFESExQVESImFxEzJSgZGh0QZicrHBQoKSouHwIzNDg7LC8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABD0rgyTwpef3ZB5j1nRssccd/4JedqzHGJjziYBAAAAAAAAAAAAAAAAAAAAAAA+8OK17RWkbbTyaDQNVUxbLX2Xv8AKvl9QVOiary5d+zsV62j8oWuDU+Gvrbck+O6PhCxAfGPDSvq0rXyiIeiAEvm1YndMRPnG1IDkzatwX/Yis9a938lZpOpL1347duPZndPx4SvgGNvSazstE1mOUxslDW6VomPNGy8eUxumPKWd0/QL4J396kzutH5T0kHIAAAAAAAAhIAAAAAAA+8OK2S0UrG2Zl8NJqjQvRU7Vo79ojb92OgPbQNCrhrsjfafWt1n6OkAAAAAAAAAEXpFomtoiYmNkxPNIDM6z0CcNtsbZxzPdnpPSXE2GfFXJWaWjbExvZTStHnFeaW5cJ615SDyAAAAAAAAAAAAAB36n0b0mWJmO7TvT4zyj++jSODUuDsYYnnee1Ply+TvABIIEgIEgIEgIEgIEgIVmvdG7eP0kR3qcfGnP6rRFqxMTE8JiYnyBjB6aRi7F7U9m0x7uXyeYAAAAAAAAAACa12zERxmYiPOUPfQa7c2OPv1Bq6VisRWOERER5QkAEoSAAAAAAAAAAAADOa9x9nNt9qsT743K5c/aOu/FPhkj/ipgAAAAAAAAAAHTq6f8fH+OHM9MF+zelul6z7toNeAAlCQAAAAAAAAAAAAUv2j/0v9z/qpVt9ob7clK+zWZ+M/wBFSAAAAAAAAAAAADWaBm9JipbrWNvnG6Xupvs/pHrYp/FX9VyAlCQAAAAAAAAAAAc+n6R6LFa/PZsr+KeAM9rTL28955RPZj3bvz2uQAAAAAAAAAAAAAemDLOO9b141nb59YavR81clIvXhMfDwZB36p070Nuzaf8ADtO/7s9QaRKInbvSAAAAAAAAAAAzuutL9JfsVnuU+d+bv1xrD0cejpPfmN8+xH1Z4AAAAAAAAAAAAAAAAFlqzWc4u5ffj5Txmn9GgpeLRE1mJieExO3axrp0PTcmGe7O2vOs8J+gNWODRNa4sm6Z7Fulp5+Eu8AAAAAHhpGl48Ud+0R4cZn3A91ZrLWkY9tMey2ThM8Yp5+Lh03W98m2uPbSvXb3p+isBNrTMzMztmZ2zM85QAAAAAAAAAAAAAAAAJrWZnZETM9IjaCBYYNUZr75iKR96d/wh9aTqbJSNtJjJHOI3T/UFa98GmZcfqXtEdPWj4S8bVmJ2TExPSY2IBa4teZI9albeW2r3rr2vPFb3WiVGAvZ17Tljv75rDyvr2f2ccR522qcB25taZ77u32Y6ViI+fFxzO2ds756ygAHXoursuXhXs19q27/ANdWbUmSI20tW3hPdBVD1zYL452XrNfON3xeQAAAAAAAAAAAAAmtZtMViJmZnZERzlodW6sriiL32WyfGK+Xj4g4dB1Pa+y2XbSvs/tT9F1o+jY8UbKViPHnPnL2AAAeWbR6ZI2XpW3nDgzakxT6trU/mj5rQBQX1Hkj1b0t5xNfq8p1Pn6Vn95pAGajVGkezH8UPSmpM08ZpHvmWhAU+LUUR6+SZ8K17P1d2DV+HH6tI29bd6fm6gAAHzasWjZMRMdJjaq9M1NW2/FPYn2Z3xP0WwDHZsVsduzes1mOv6dXw1ul6LTNXs3jynnWfBmtN0S2G3ZtvifVtHCY+oOcAAAAAAAAFlqXRPSX7do7tJ+N/wC9/wAAd+p9A9HX0l479o4exH1WSQECQAAAAAAAAAAAAAAB46Vo9ctJpbhPCek9YewDIaTgtivNLcY+ccpeTR650T0mPtVjv03x415wzgAAAAAAERyjj+rW6Fo8Ysdac4jf425qDU2Dt5omeFI7U+fL+/BpgEJAQJAAAAAAAAAAAAAAAAAGW1po3ostoj1bd6vlPJqVXr7B2scXjjSf5Z4/oDPgAAAAAuPs7xyeVP1XaQECQEAAAAAAAACQECQAAAAAABy6z/yMn4JAGVAAAB//2Q==";
class AddFoodItem extends Component {
  constructor({ showAddFoodModal }) {
    super({ showAddFoodModal });
    this.state = {
      modal: showAddFoodModal,
      itemImagePreview: dummyImg,
    };
    this.myRef = React.createRef();
  }

  // Onchange function for input fields.
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Submit function. Post API.
  handleOk = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("itemImage", this.state.itemImage);
    formData.append("name", this.state.name);
    formData.append("price", this.state.price);
    console.log("formData", formData);

    axios
      .post("http://localhost:3001/api/food-item/add", formData)
      .then((res) => {
        this.setState({
          modal: false,
          name: "",
          price: "",
          itemImage: "",
        });
        this.props.getFoodItems();
      });
  };

  // Modal box Cancel function
  handleCancel = () => {
    this.setState({
      modal: false,
      name: "",
      price: "",
      itemImage: "",
    });
    this.props.getFoodItems();
  };

  // Onchange Image function
  onImageChange = (e) => {
    var file = this.refs.uploadImg.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    this.setState({
      itemImage: e.target.files[0],
    });
    reader.onloadend = () => {
      this.setState({
        itemImagePreview: [reader.result],
      });
    };
  };

  render() {
    return (
      <div>
        <Modal show={this.state.modal} onHide={this.handleCancel}>
          <form onSubmit={this.handleOk} encType="multipart/form-data">
            <Modal.Header closeButton>
              <Modal.Title>Add a Food Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Food Item</label>
              <br></br>
              <input
                onChange={(e) => this.onChange(e)}
                class="form-control"
                placeholder="Enter the name of Food Item"
                type="text"
                name="name"
              />
              <br></br>
              <label>Price </label>
              <input
                onChange={(e) => this.onChange(e)}
                class="form-control"
                placeholder="Enter Price"
                type="number"
                name="price"
              />
              <br></br> <label>Choose Image</label>
              <br></br>
              <img
                src={this.state.itemImagePreview}
                name="itemImage"
                style={{ width: "107px", height: "107px" }}
              />
              <br></br>
              <input
                ref="uploadImg"
                type="file"
                class="form-control"
                filename="itemImage"
                onChange={(e) => this.onImageChange(e)}
              />
              <br></br>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleCancel}>
                Close
              </Button>
              <Button variant="primary" type="submit" onClick={this.handleOk}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    );
  }
}
export default AddFoodItem;
