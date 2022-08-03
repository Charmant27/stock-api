const { StatusCodes } = require("http-status-codes");
const { customError } = require("../errors");
const errorHandler = (err, req, res, next) => {
  if (err instanceof customError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("SOMETHING WENT WRONG... Please try again!!!");
};

module.exports = errorHandler;
