import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json(['Alison', 'Camila', 'Sofia']);
});

app.listen(3333);
