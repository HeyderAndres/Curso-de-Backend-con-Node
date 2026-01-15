import Joi from "joi";

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const lastName = Joi.string().min(3).max(50);
const phone = Joi.string().min(10).max(15);
const email = Joi.string().email();
const password = Joi.string().min(8);
const userId = Joi.number().integer();

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId: userId,
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

export { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
