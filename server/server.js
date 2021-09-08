const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

const restaurantsRoutes = require("./routes/restaurants");
const foodItemsRoutes = require("./routes/foodItems");

app.use(cors());
app.use("./uploads", express.static("uploads"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/restaurants", restaurantsRoutes);
app.use("/api/food-item", foodItemsRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
