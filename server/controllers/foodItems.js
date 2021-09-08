const foodItemsModel = require("../models/foodItemsModel");

exports.getFoodItemsPage = async (req, res) => {
  const foodItems = await foodItemsModel.find({});

  try {
    res.status(200).json({ message: "get foodItems list", foodItems });
  } catch (error) {
    res.status(500).send(error);
  }
  console.log("getFoodItemsPage");
};
exports.postFoodItemsItem = async (req, res, next) => {
  console.log(req.body);

  const foodItem = new foodItemsModel({
    name: req.body.name,
    price: req.body.price,
    itemImage: req.file.originalname,
  });
  try {
    await foodItem.save();
    res.status(200).json({ message: "post food item", foodItem });
  } catch (error) {
    res.status(500).send(error);
  }
  console.log("postFoodItemsItem");
};
