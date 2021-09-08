import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Restaurant from "./Components/restaurants/Restaurant";
import FoodItem from "./Components/foodItems/FoodItem";
require("dotenv").config();

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Redirect exact from="/" to="/restaurants" />
        <Route exact path="/restaurants" component={Restaurant} />
        <Route exact path="/food-item" component={FoodItem} />
        <Redirect from="*" to="/restaurants" />
      </Switch>
    </Router>
  );
}

export default App;
