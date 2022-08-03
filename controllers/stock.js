const Stock = require("../models/stock");
const { StatusCodes } = require("http-status-codes");
const { notFound } = require("../errors");

const getItems = async (req, res) => {
  const stock = await Stock.find({});
  res.status(StatusCodes.OK).json({ stock });
};

const createItems = async (req, res) => {
  const stock = await Stock.create(req.body);
  res.status(StatusCodes.CREATED).json({ stock });
};

const getSingleItem = async (req, res, next) => {
  const { id: stockID } = req.params;
  const stock = await Stock.findOne({ _id: stockID });

  if (!stock) {
    throw new notFound(`No item with the id ${stockID}`);
  }

  res.status(StatusCodes.OK).json({ stock });
};

const updateItem = async (req, res) => {
  const { id: stockID } = req.params;
  const stock = await Stock.findOneAndUpdate({ _id: stockID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!stock) {
    throw new notFound(`No item with the ${stockID} in the stock`);
  }

  res.status(StatusCodes.OK).json({ stock });
};

const deleteItem = async (req, res) => {
  const { id: stockID } = req.params;

  const stock = await Stock.findOneAndDelete({ _id: stockID });

  if (!stock) {
    throw new notFound(`no item with the ${stockID} in the stock`);
  }

  res.status(StatusCodes.OK).json({ stock });
};

module.exports = {
  getItems,
  createItems,
  getSingleItem,
  updateItem,
  deleteItem,
};
