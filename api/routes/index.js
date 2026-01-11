import { Router } from "express";
import  productsRouter from "./products.routes.js";
// const categoriesRouter = require('./categories.routes');
import usersRouter from './users.routes.js';
const router = Router();

function routerAPI(app) {
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  // app.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);

}

export default routerAPI;
