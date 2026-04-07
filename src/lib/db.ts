import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'dapin_edu',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 10000,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// Use a broad type for SQL parameters
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SqlParams = any[];

// Generic query helper - returns all rows
export async function query<T = mysql.RowDataPacket>(
  sql: string,
  params?: SqlParams
): Promise<T[]> {
  const [rows] = await pool.execute<mysql.RowDataPacket[]>(sql, params);
  return rows as T[];
}

// Get a single row
export async function getOne<T = mysql.RowDataPacket>(
  sql: string,
  params?: SqlParams
): Promise<T | null> {
  const [rows] = await pool.execute<mysql.RowDataPacket[]>(sql, params);
  if (rows.length === 0) return null;
  return rows[0] as T;
}

// Execute a write operation (INSERT, UPDATE, DELETE)
export async function execute(
  sql: string,
  params?: SqlParams
): Promise<mysql.ResultSetHeader> {
  const [result] = await pool.execute<mysql.ResultSetHeader>(sql, params);
  return result;
}

// Get pool for direct use if needed
export { pool };

export default pool;
