const express = require("express");
require("dotenv").config();
const startConsumer = require("./kafka/consumer");
const userRoutes = require("./routes/user.routes");

const app = express();
app.use(express.json());

app.use("/users", userRoutes);

const PORT = process.env.PORT || 3001;

const start = async () => {
  await startConsumer(); // 🔑 start consumer
  app.listen(PORT, () =>
    console.log(`User Service running on ${PORT}`)
  );
};

start();
