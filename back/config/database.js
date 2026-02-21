import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

 const pool = mysql.createPool({ 
  host: process.env.TIDB_HOST,
  user: process.env.TIDB_USER,
  password: process.env.TIDB_PASSWORD,
  database: process.env.TIDB_DB_NAME,
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  },
  // Ajuda a evitar que o app trave por muitas conexões abertas
  connectionLimit: 10 
});

export default pool;
