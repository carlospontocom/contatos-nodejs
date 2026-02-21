import express from 'express';
import User from './models/usuarioModel.js';

const app = express();
// Usa a porta definida pelo ambiente ou 3000 como padrão
const port = process.env.PORT || 3000;

// Rota async para buscar usuários
app.get('/usuarios', async (req, res) => {
  try {
    // Chama a função e aguarda o resultado
    const users = await User.buscarTodosUsuarios();
    res.json(users);
  } catch (err) {
    // Em caso de erro, envia uma resposta com status 500
    console.error('Erro ao buscar usuários:', err);
    res.status(500).send('Ocorreu um erro no servidor');
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
