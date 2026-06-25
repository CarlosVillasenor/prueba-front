import sql from 'better-sqlite3';

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

export function saveRemittance(remittance) {
  const { amount, currency, date } = remittance;

  remittance.company = "Nueve09";
  
  db.prepare(`
    INSERT INTO remittances (amount, currency, date, company)
    VALUES (?, ?, ?, ?)
  `).run(amount, currency, date, remittance.company);
}
