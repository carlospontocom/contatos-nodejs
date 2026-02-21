import pool from '../config/database.js';

const User = {
  // Função async para buscar todos os usuários
  async buscarTodosUsuarios() {
    // Pega uma conexão do pool
    const connection = await pool.getConnection();
    try {
      // Executa a query de forma segura
      const [rows] = await connection.query('SELECT * FROM usuarios');
      return rows;
    } finally {
      // Libera a conexão de volta para o pool
      connection.release(); 
    }
  }
};

export default User;
