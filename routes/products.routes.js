const { Router } = require('express');
const ProductsService = require('../services/products.services');
const { validationHandler } = require('../middlewares/validation.handler');
const {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
} = require('../schema/product.schema.js');

const router = Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post(
  '/',
  validationHandler(createProductSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  },
);

router.patch(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  validationHandler(updateProductSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedProduct = await service.update(id, body);
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', validationHandler(getProductSchema, 'params'), async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await service.delete(id);
  res.json(deletedProduct);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

router.get(
  '/:id',
  validationHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json({ product });
    } catch (error) {
      next(error);
    }
  },
);

module.exports = router;
