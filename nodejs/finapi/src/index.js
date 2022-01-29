const express = require('express');
const {
  v4: uuidv4
} = require('uuid');
const app = express();

const customers = [];

app.use(express.json());

app.post('/account', (req, res) => {
  const {
    cpf,
    name
  } = req.body;
  const customersAlreadyExist = customers.some(customer => customer.cpf === cpf);

  if (customersAlreadyExist) {
    return res.status(400).json({
      error: 'Customer already exists'
    });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: []
  });

  return res.status(201).send();
});

app.listen('3333');