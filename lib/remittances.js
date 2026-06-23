import sql from 'better-sqlite3';

const db = sql('remittances.db');

export async function getAllRemittances() {
  // Simulate a delay of half a second
  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return db.prepare(`SELECT * FROM remittances`).all();
}
