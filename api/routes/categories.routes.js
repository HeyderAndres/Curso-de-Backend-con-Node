import { validationHandler } from "../middlewares/validation.handler.js";
import { Router } from "express";
import { CategoryService } from "../services/category.service.js";
import { createCategorySchema, updateCategorySchema, getCategorySchema } from "../schema/category.schema.js";

const router = Router();
const service = new CategoryService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.post('/', validationHandler(createCategorySchema, 'body'), async (req, res) => {
  const body = req.body;
  const newCategory = await service.create(body);
  res.status(201).json(newCategory);
});

router.patch('/:id', validationHandler(getCategorySchema, 'params'), validationHandler(updateCategorySchema, 'body'), async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedCategory = await service.update(id, body);
  res.json(updatedCategory);
});

router.get('/:id', validationHandler(getCategorySchema, 'params'), async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id);
  res.json(category)
})

router.delete('/:id', validationHandler(getCategorySchema, 'params'), async (req, res) => {
  const { id } = req.params;
  const deletedCategory = await service.delete(id);
  res.json(deletedCategory);
});

export default router;
