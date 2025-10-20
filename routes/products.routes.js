const { Router } = require("express");
const { faker } = require("@faker-js/faker");

const router = Router();

router.get('/', (req, res) => {
  const products = [];
  const { limit } = req.query;
  const size =  limit || 10;

  for (let i = 0; i < size; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    })
  }

 res.json(products);

});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body,
  })
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    id,
    message: 'updated',
    data: body,
  })
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    message: 'deleted',
  });
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: faker.commerce.productName(),
    price: parseInt(faker.commerce.price(), 10),
    image: faker.image.url(),
  })
})

module.exports = router;
