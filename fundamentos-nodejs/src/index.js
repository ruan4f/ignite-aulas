const express = require('express');
const app = express();

app.get('/courses', (req, res) => {
  return res.json(['Curso 1', 'Curso 2']);
});

app.post('/courses', (req, res) => {
  return res.json(['Curso 1', 'Curso 2']);
});

app.put('/courses/:id', (req, res) => {
  const params = req.params;
  console.log(params);
  return res.json(['Curso 6', 'Curso 2']);
});

app.patch('/courses/:id', (req, res) => {
  return res.json(['Curso 61', 'Curso 2']);
});

app.delete('/courses/:id', (req, res) => {
  return res.json(['Curso 2']);
});

app.listen(3333);