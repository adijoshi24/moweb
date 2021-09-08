import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <a href="/restaurants">Restaurants</a>
        <a href="/food-item">Food Items</a>
      </div>
    );
  }
}

export default Navbar;
