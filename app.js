const express = require("express");
const routerAPI = require("./routes");

const app = express();
const PORT = 3000;

app.use(express.json());
routerAPI(app);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(PORT, () => {
  console.log(`server runing in port ${PORT}`);
});


