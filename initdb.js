const sql = require('better-sqlite3');
const db = sql('remittances.db');

// Dummy remittance data to populate the database
const dummyRemittances = [
  { company: "Remitly", amount: "9650.5", status: "failed", created_at: "20240620", charged_at: "" },
  { company: "Xoom", amount: "14275.0", status: "completed", created_at: "20240621", charged_at: "20240621" },
  { company: "RIA", amount: "31980.7", status: "completed", created_at: "20240623", charged_at: "20240624" },
  { company: "PayPal", amount: "6810.33", status: "pending", created_at: "20240624", charged_at: "" },
  { company: "Neteller", amount: "11730.5", status: "completed", created_at: "20240625", charged_at: "20240625" },
  { company: "Skrill", amount: "8950.9", status: "failed", created_at: "20240626", charged_at: "" },
  { company: "WorldRemit", amount: "15420.7", status: "completed", created_at: "20240627", charged_at: "20240628" },
  { company: "Western Union", amount: "27450.44", status: "completed", created_at: "20240628", charged_at: "20240629" },
  { company: "MoneyGram", amount: "7543.66", status: "pending", created_at: "20240615", charged_at: "" },
  { company: "MoneyGram", amount: "12590.7", status: "pending", created_at: "20240629", charged_at: "" },
  { company: "Wise", amount: "20875.9", status: "completed", created_at: "20240701", charged_at: "20240701" },
  { company: "Remitly", amount: "7430.0", status: "failed", created_at: "20240702", charged_at: "" },
  { company: "Xoom", amount: "16890.99", status: "completed", created_at: "20240703", charged_at: "20240704" },
  { company: "Wise", amount: "22890.2", status: "completed", created_at: "20240617", charged_at: "20240618" },
  { company: "RIA", amount: "13425.0", status: "completed", created_at: "20240705", charged_at: "20240705" },
  { company: "PayPal", amount: "9200.0", status: "pending", created_at: "20240706", charged_at: "" },
  { company: "Neteller", amount: "28450.6", status: "completed", created_at: "20240707", charged_at: "20240708" },
  { company: "Skrill", amount: "6350.5", status: "failed", created_at: "20240708", charged_at: "" },
  { company: "WorldRemit", amount: "17560.0", status: "completed", created_at: "20240709", charged_at: "20240710" },
  { company: "Western Union", amount: "22140.0", status: "completed", created_at: "20240710", charged_at: "20240710" },
  { company: "MoneyGram", amount: "10890.99", status: "pending", created_at: "20240711", charged_at: "" },
  { company: "PayPal", amount: "14975.11", status: "completed", created_at: "20240712", charged_at: "20240713" },
  { company: "Western Union", amount: "18342.1", status: "completed", created_at: "20240612", charged_at: "20240613" },
  { company: "Wise", amount: "22890.9", status: "completed", created_at: "20240617", charged_at: "20240618" },
];

// Create the remittances table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS remittances (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      status TEXT NOT NULL,
      created_at TEXT NOT NULL,
      charged_at TEXT NOT NULL
    )
`).run();

// Function to insert dummy remittance data into the database
async function initData() {
  const stmt = db.prepare(`
      INSERT INTO remittances VALUES (
        null,
        @company,
        @amount,
        @status,
        @created_at,
        @charged_at
      )
    `);

  for (const remittance of dummyRemittances) {
    stmt.run(remittance);
  }
}

// Call the function to initialize the database with dummy data
initData();
