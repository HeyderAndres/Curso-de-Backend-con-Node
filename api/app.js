const express = require("express");
const routerAPI = require("./routes");
const cors = require("cors");
const {logErrors, errorHandler, boomErrorHandler} = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whiteList = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    }else {
      callback(new Error("No permitido por cors"));
    }
  }
}

app.use(cors(options));
routerAPI(app);

app.get("/api", (req, res) => {
  res.send("Hello World!!");
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`server runing in port ${port}`);
// });

// module.exports = app;

export default function handler(req, res) {
  return app(req, res);
}

