const { StatusCodes } = require("http-status-codes");

const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.msg || "Something went wrong please try again!!!",
  };
  if (err instanceof customError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  next();
};

module.exports = errorHandler;
