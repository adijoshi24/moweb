import React, { Component } from "react";
import AddRestaurant from "./AddRestaurant";
import axios from "axios";
import moment from "moment";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import EditModal from "./EditModal";
const columns = [
  {
    dataField: "id",
    text: "#",
    sort: true,
    headerStyle: () => {
      return { width: "40px" };
    },
  },
  {
    dataField: "name",
    text: "Restaurant",
    sort: true,
    headerStyle: () => {
      return { wordWrap: "break-word" };
    },
  },
  {
    dataField: "foodItems",
    text: "Food Items",
    headerStyle: () => {
      return { whiteSpace: "normal", wordWrap: "break-word" };
    },
  },
  {
    dataField: "status",
    text: "Status",
    headerStyle: () => {
      return { width: "80px" };
    },
  },
  {
    dataField: "startTime",
    text: "Start time",
    sort: true,
    headerStyle: () => {
      return { width: "90px" };
    },
  },
  {
    dataField: "endTime",
    text: "Closing time",
    sort: true,
    headerStyle: () => {
      return { width: "90px" };
    },
  },
  {
    dataField: "open_close",
    text: "Open / Close",
    sort: true,
    headerStyle: () => {
      return { width: "140px" };
    },
  },
  {
    dataField: "edit",
    text: "Edit",
    headerStyle: () => {
      return { width: "80px" };
    },
  },
];
class Restaurant extends Component {
  constructor() {
    super();
    this.state = {
      showAddModal: false,
      showEditModal: false,
      foodItemArray: [],
    };
  }

  componentDidMount = () => {
    this.getRestaurants();
    this.getFoodItems();
  };

  // calls the restaurants API. list of restaurants saved in DB
  getRestaurants = () => {
    axios.get("http://localhost:3001/api/restaurants").then((res) => {
      this.setState({
        allRestaurants: res.data.restaurants,
        showAddModal: false,
        showEditModal: false,
      });
    });
  };

  getFoodItems = () => {
    axios.get("http://localhost:3001/api/food-item").then((res) => {
      console.log("res", res);

      res.data.foodItems.map((item) =>
        this.state.foodItemArray.push(item.name)
      );
    });
  };

  addClick = () => {
    this.setState({
      showAddModal: true,
    });
  };
  editClick = (id, object) => {
    console.log("id", id);
    console.log("object", object);
    this.setState({
      showEditModal: true,
      restaurantItem: object,
    });
  };

  render() {
    const { showAddModal, showEditModal, restaurantItem } = this.state;
    console.log("this.state", this.state);
    const dummy = [
      {
        id: " ",
        name: " ",
        foodItems: " ",
        status: " ",
        startTime: " ",
        endTime: " ",
        open_close: " ",
        edit: <button>Edit</button>,
      },
    ];
    var time =
      new Date().getHours() * 60 * 60 +
      new Date().getMinutes() * 60 +
      new Date().getSeconds();
    const myData =
      this.state.allRestaurants &&
      this.state.allRestaurants.map((item, i) => ({
        id: i + 1,
        name: item.name,
        foodItems: item.foodItems
          ? item.foodItems.map((item) => `${item}, `)
          : "NA",
        status: item.status,
        startTime: moment()
          .startOf("day")
          .seconds(item.startTime)
          .format("h:mm a"),
        endTime: moment().startOf("day").seconds(item.endTime).format("h:mm a"),
        open_close:
          time > item.startTime && time < item.endTime ? "Open " : "Close",
        edit: (
          <button onClick={() => this.editClick(item._id, item)}>Edit</button>
        ),
      }));
    return (
      <div className="container">
        <button className="addButton" onClick={() => this.addClick()}>
          Add Restaurant
        </button>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={myData ? myData : dummy}
          columns={columns}
          hover
          pagination={paginationFactory()}
        />
        {showAddModal && (
          <AddRestaurant
            showAddModal={showAddModal}
            foodItemArray={this.state.foodItemArray}
            getRestaurants={() => this.getRestaurants()}
          />
        )}
        {showEditModal && (
          <EditModal
            showEditModal={showEditModal}
            restaurantItem={restaurantItem}
            foodItemArray={this.state.foodItemArray}
            getRestaurants={() => this.getRestaurants()}
          />
        )}
      </div>
    );
  }
}

export default Restaurant;
