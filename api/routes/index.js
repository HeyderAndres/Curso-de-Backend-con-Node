import { Router } from "express";
import  productsRouter from "./products.routes.js";
import categoriesRouter  from './categories.routes.js';
import usersRouter from './users.routes.js';
import customersRouter from './customers.routes.js';
import orderRouter from './order.routes.js';
import authRouter from './auth.routes.js'

const router = Router();

function routerAPI(app) {
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
  router.use('/customers', customersRouter);
  router.use('/orders', orderRouter);
  router.use('/auth', authRouter);

}

export default routerAPI;
