const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

const customers = [];

//Middleware
function verifyIfExistsAccountCPF(req, res, next) {
  const { cpf } = req.headers;
  const customer = customers.find(customer => customer.cpf === cpf);

  if (!customer) {
    return res.status(400).json({ error: "Constumer not found" });
  }

  req.customer = customer;

  return next();
}

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

//app.use(verifyIfExistsAccountCPF);
app.get('/statement', verifyIfExistsAccountCPF, (req, res) => {  
  const { customer } = req;
  
  return res.json(customer.statement);
});

app.post('/deposit', verifyIfExistsAccountCPF, (req, res) => {
  const { customer } = req;
  const { description, amount } = req.body

  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: 'credit'
  }

  customer.statement.push(statementOperation);

  return res.status(201).send();  
});

app.listen('3333');