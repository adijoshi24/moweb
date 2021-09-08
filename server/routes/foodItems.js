const express = require("express");
const router = express.Router();

const FoodItemsPageController = require("../controllers/foodItems");
const UploadController = require("../controllers/upload");

router.post(
  "/add",
  UploadController.upload.single("itemImage"),
  FoodItemsPageController.postFoodItemsItem
);
router.get("/", FoodItemsPageController.getFoodItemsPage);

module.exports = router;
