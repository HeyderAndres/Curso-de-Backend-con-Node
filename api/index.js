import express  from "express";
import routerAPI from "./routes/index.js";
import cors from "cors";
import { logErrors, errorHandler, boomErrorHandler } from "./middlewares/error.handler.js";
import passport   from "./utils/auth/index.js";


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
app.use(passport.initialize());

routerAPI(app);

app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`server runing in port ${port}`);
  });
}

export default app;
