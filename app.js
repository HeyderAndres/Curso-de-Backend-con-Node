const express = require("express");
const routerAPI = require("./routes");
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/error.handler");

const app = express();
const PORT = 3000;

app.use(express.json());
routerAPI(app);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server runing in port ${PORT}`);
});




