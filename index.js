import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/data', (req, res) => {
  res.json({ message: '¡Datos enviados desde el servidor!' });
});