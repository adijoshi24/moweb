import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import AddFoodItem from "./AddFoodItem";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
const columns = [
  {
    dataField: "id",
    text: "#",
    sort: true,
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "image",
    text: "image",
    headerStyle: () => {
      return { width: "10%" };
    },
  },
  {
    dataField: "foodItem",
    text: "Food Item",
    sort: true,
  },
  {
    dataField: "price",
    text: "Price",
  },
];
class FoodItem extends Component {
  constructor() {
    super();
    this.state = {
      showAddFoodModal: false,
    };
  }

  componentDidMount = () => {
    this.getFoodItems();
  };

  // calls the food-item API. list of food Item saved in DB
  getFoodItems = () => {
    axios.get("http://localhost:3001/api/food-item").then((res) => {
      this.setState({
        allFoodItems: res.data.foodItems,
        showAddFoodModal: false,
      });
    });
  };

  render() {
    let internationalNumberFormat = new Intl.NumberFormat("en-IN");

    const dummy = [
      {
        id: " ",
        image: " ",
        foodItem: " ",
        price: " ",
      },
    ];
    const myData =
      this.state.allFoodItems &&
      this.state.allFoodItems.map((item, i) => ({
        id: i + 1,
        image: (
          <img
            src={`/uploads/${item.itemImage}`}
            style={{ width: "40px", height: "40px" }}
          />
        ),
        foodItem: item.name,
        price: internationalNumberFormat.format(item.price),
      }));
    const { allFoodItems, showAddFoodModal } = this.state;
    return (
      <div className="container">
        <button
          className="addButton"
          onClick={() => {
            this.setState({
              showAddFoodModal: true,
            });
          }}
        >
          Add Food Item
        </button>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={myData ? myData : dummy}
          columns={columns}
          hover
          pagination={paginationFactory()}
        />

        {showAddFoodModal && (
          <AddFoodItem
            showAddFoodModal={showAddFoodModal}
            getFoodItems={() => this.getFoodItems()}
          />
        )}
      </div>
    );
  }
}

export default FoodItem;
