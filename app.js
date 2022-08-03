require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const router = require("./routers/stock");
const errorHandler = require("./middleware/errorHandler");

//middlewares
app.use(express.json()); //for posting
app.use(errorHandler);

//routes
app.use("/api/stock", router);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
