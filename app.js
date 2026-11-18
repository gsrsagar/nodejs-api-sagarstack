const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const depaertmentRoutes = require("./routes/departmentRoutes");
const postRoutes = require("./routes/postRoutes");
const winston = require("winston");
const connectDB = require("./config/db");
const logger = require("./logs/loggers");
const errorMiddleware = require("./middlewares/errorMiddleware");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const app = express();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptionsFinal = require("./swagger");
const swaggerSpec = swaggerJsdoc(swaggerOptionsFinal);

dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(errorMiddleware);
app.use(loggerMiddleware);

// routes
app.use("/api", depaertmentRoutes);
app.use("/api", postRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Flipkart API Some where in the middle  aqda qdfqfd aqdqq",
  );
});

app.listen(process.env.PORT, () => {
  //server Starting Point
  connectDB();
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`App is running on http://localhost:${process.env.PORT}`);
});
