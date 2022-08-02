const Stock = require("../models/stock");
const { StatusCodes } = require("http-status-codes");
const { badRequest } = require("../errors");

const getItems = async (req, res) => {
  const stock = await Stock.find({});
  res.status(StatusCodes.OK).json({ stock });
};

const createItems = async (req, res) => {
  const stock = await Stock.create(req.body);
  res.status(StatusCodes.CREATED).json({ stock });
};

const getSingleItem = async (req, res) => {
  const { id: stockID } = req.params;
  const stock = await Stock.findOne({ _id: stockID });

  if (!stock) {
    throw new badRequest(`No item with the id ${stockID}`);
  }

  res.status(StatusCodes.OK).json({ stock });
};

module.exports = { getItems, createItems, getSingleItem };
