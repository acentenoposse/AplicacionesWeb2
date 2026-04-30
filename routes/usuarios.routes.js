import { Router } from 'express';
import { leerJson } from '../utils/db.js';

const router = Router();

// POST /usuarios/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ mensaje: 'Debe enviar email y password' });
    }

    const { usuarios } = await leerJson('usuarios.json');
    const usuario = usuarios.find(
      (usuarioActual) => usuarioActual.email === email && usuarioActual.password === password
    );

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }

    const { password: _password, ...usuarioSinPassword } = usuario;
    res.json({ mensaje: 'Login correcto', usuario: usuarioSinPassword });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al iniciar sesión', error: error.message });
  }
});

export default router;
