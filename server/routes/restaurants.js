const express = require("express");
const router = express.Router();

const RestaurantsPageController = require("../controllers/restaurants");

router.post("/add", RestaurantsPageController.postRestaurantsItem);
router.get("/", RestaurantsPageController.getRestaurantsPage);

module.exports = router;
