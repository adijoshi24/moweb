const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foodItems: {
    type: [String],
  },
  startTime: {
    type: Number,
    default: 0,
    required: true,
  },
  endTime: {
    type: Number,
    default: 0,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
