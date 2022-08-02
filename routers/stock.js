const express = require("express");
const router = express.Router();

const {
  getItems,
  createItems,
  getSingleItem,
} = require("../controllers/stock");

router.route("/").get(getItems).post(createItems);
router.route("/:id").get(getSingleItem);

module.exports = router;
