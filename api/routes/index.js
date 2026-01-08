import { Router } from "express";
import  productsRouter from "./products.routes.js";
// const categoriesRouter = require('./categories.routes');
// const usersRouter = require('./users.routes');
const router = Router();

function routerAPI(app) {
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  // app.use('/categories', categoriesRouter);
  // app.use('/users', usersRouter);

}

export default routerAPI;
