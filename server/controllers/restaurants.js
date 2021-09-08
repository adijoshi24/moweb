const restaurantModel = require("../models/restaurantModel");

exports.getRestaurantsPage = async (req, res) => {
  const restaurants = await restaurantModel.find({});

  try {
    res.status(200).json({ message: "get restaurant list", restaurants });
    // res.send(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }

  console.log("getRestaurantPage");
};
exports.postRestaurantsItem = async (req, res, next) => {
  const restaurant = new restaurantModel(req.body);
  try {
    await restaurant.save();
    res.status(200).json({ message: "post restaurant list", restaurant });
    // res.send(restaurant);
  } catch (error) {
    res.status(500).send(error);
  }
  //   const title = req.body.item;
  console.log("req body", req.body);
  console.log("postRestaurantItem");
};
