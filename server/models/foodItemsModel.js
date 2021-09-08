const mongoose = require("mongoose");

const FoodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  itemImage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
    required: true,
  },
});

const FoodItem = mongoose.model("FoodItem", FoodItemSchema);

module.exports = FoodItem;
