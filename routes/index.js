const { Router } = require("express");
const productsRouter = require("./products.routes");
// const categoriesRouter = require('./categories.routes');
// const usersRouter = require('./users.routes');
const router = Router();

function routerAPI(app) {
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  // app.use('/categories', categoriesRouter);
  // app.use('/users', usersRouter);

}

module.exports = routerAPI;
