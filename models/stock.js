const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide the name of the product"],
  },

  img: {
    type: String,
    required: [true, "Please provide the image"],
  },

  amount: {
    type: Number,
    required: [true, "The amount must be provided"],
  },

  price: {
    type: String,
    required: [true, "The total price must be provided"],
  },
});

module.exports = mongoose.model("Stock", StockSchema);
