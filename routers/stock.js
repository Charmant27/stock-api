const express = require("express");
const router = express.Router();

const {
  getItems,
  createItems,
  getSingleItem,
  updateItem,
  deleteItem,
} = require("../controllers/stock");

router.route("/").get(getItems).post(createItems);
router.route("/:id").get(getSingleItem).patch(updateItem).delete(deleteItem);

module.exports = router;
