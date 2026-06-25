import sql from 'better-sqlite3';
import { formatDate } from '../util/util.js';
const db = sql('remittances.db');

export async function getAllRemittances() {
  // Simulate a delay of half a second
  await new Promise((resolve) => setTimeout(resolve, 500)); 
  return db.prepare(`SELECT * FROM remittances`).all();
}

export async function getRemittances(page = 1, pageSize = 10) {
  // Simulate a delay of half a second
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Calculate the offset based on the page number and page size
  const offset = (page - 1) * pageSize;

  // Fetch the remittances for the specified page
  const remittances = db
    .prepare(`SELECT * FROM remittances LIMIT ? OFFSET ?`)
    .all(pageSize, offset);

  return remittances;
}

export async function getRemittancesCount() {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const result = db
    .prepare('SELECT COUNT(*) AS count FROM remittances')
    .get();

  return result.count;
}

// company - amount - status - created_at - charged_at
export function saveRemittance(code) {
  const company = "Nueve09";
  const amount = parseFloat(code);
  const status = "completed";
  const createdAt = formatDate(new Date());
  const chargedAt = formatDate(new Date());

  db.prepare(`
    INSERT INTO remittances (company, amount, status, created_at, charged_at)
    VALUES (?, ?, ?, ?, ?)
  `).run(company, amount, status, createdAt, chargedAt);
}

export function remittanceCodeExists(code) {
  const amount = parseFloat(code);
  const result = db
    .prepare('SELECT 1 FROM remittances WHERE amount = ? LIMIT 1')
    .get(String(amount));

  // Return true if a record was found, false otherwise
  return !!result;
}
