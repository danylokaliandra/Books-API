require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const {
  userRouter,
  bookRouter,
  libaryRouter,
  authRouter,
} = require("./routes");
const { initializeConnection } = require("./config/dbConfig");
const loggerMiddleware = require("./middlewares/loggerMiddleware");
const { createFirstUser } = require("./config/userConfig");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(loggerMiddleware);

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/library", libaryRouter);

app.listen(PORT, async () => {
  await initializeConnection();
  await createFirstUser();
  console.log(`Server running on port: ${PORT}`);
});
