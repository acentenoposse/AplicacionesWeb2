import express from 'express';
import dotenv from 'dotenv';

import productosRoutes from './routes/productos.routes.js';
import ventasRoutes from './routes/ventas.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import categoriasRoutes from './routes/categorias.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API de e-commerce de pádel funcionando correctamente',
    rutas: {
      productos: '/productos',
      ventas: '/ventas',
      usuarios: '/usuarios',
      categorias: '/categorias'
    }
  });
});

app.use('/productos', productosRoutes);
app.use('/ventas', ventasRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/categorias', categoriasRoutes);

app.use((req, res) => {
  res.status(404).json({ mensaje: 'Ruta no encontrada' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
