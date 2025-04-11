const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Arriba Alianza toda la vida!');
});

app.get('/clientes', (req, res) => {
  res.json([
    { id: 1, nombre: 'Christopher' },
    { id: 2, nombre: 'Antonio' },
    { id: 3, nombre: 'Jorge' },
  ]);
});

app.get('/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Laptop' },
    { id: 2, nombre: 'Tablet' },
    { id: 3, nombre: 'Celular' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor Express en http://localhost:${PORT}`);
});
