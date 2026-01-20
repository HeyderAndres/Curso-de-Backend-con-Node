import { OrderService } from "../services/order.service.js";
import { validationHandler } from "../middlewares/validation.handler.js";
import { createOrderSchema, updateOrderSchema, getOrderSchema } from "../schema/order.schema.js";
import { Router } from "express";

const router = Router();
const service = new OrderService();


router.get('/', async (req, res) => {
  const orders = await service.find();
  res.json(orders);
});

router.post('/', validationHandler(createOrderSchema, 'body'),  async(req, res) => {
  const body = req.body;
  const newOrder = await service.create(body);
  res.status(201).json(newOrder);
});

router.patch('/:id', validationHandler(getOrderSchema, 'params'), validationHandler(updateOrderSchema, 'body'), (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedOrder = service.update(id, body);
  res.json(updatedOrder);
});

router.get(
  '/:id',
  validationHandler(getOrderSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const order = await service.findOne(id);
    res.json(order);
  },
);

router.delete('/:id', validationHandler(getOrderSchema, 'params'), (req, res) => {
  const { id } = req.params;
  const deletedOrder = service.delete(id);
  res.json(deletedOrder);
});

export default router;

