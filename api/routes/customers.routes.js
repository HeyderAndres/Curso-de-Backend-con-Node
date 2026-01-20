import { CustomerService } from "../services/customer.service.js";
import { Router } from "express";
import { validationHandler } from "../middlewares/validation.handler.js";
import { createCustomerSchema, updateCustomerSchema, getCustomerSchema } from "../schema/customer.schema.js";

const service = new CustomerService();
const router = Router();

router.get('/', async (req, res) => {
  const customers = await service.find();
  res.json(customers);
});

router.post('/', validationHandler(createCustomerSchema, 'body'), async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', validationHandler(getCustomerSchema, 'params'), validationHandler(updateCustomerSchema, 'body'), async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updateCustomer = await service.update(id, body);
  res.json(updateCustomer);
});

router.delete('/:id', validationHandler(getCustomerSchema, 'params'), async (req, res) => {
  const { id } = req.params;
  const deletedCustomer = await service.delete(id);
  res.json(deletedCustomer);
});


router.get(
  '/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res) => {
    const { id } = req.params;
    const customer = await service.findOne(id);
    res.json(customer);
  });

export default router;
