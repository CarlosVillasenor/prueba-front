const sql = require('better-sqlite3');
const db = sql('remittances.db');

// Dummy remittance data to populate the database
const dummyRemittances = [
  { company: "Western Union", amount: "12000", status: "", created_at: "20231203", charged_at: "20231203" },
  { company: "MoneyGram", amount: "15000", status: "", created_at: "20231204", charged_at: "20231204" },
  { company: "PayPal", amount: "8000", status: "", created_at: "20231205", charged_at: "20231205" },
  { company: "WorldRemit", amount: "10000", status: "", created_at: "20231206", charged_at: "20231206" },
  { company: "Remitly", amount: "9000", status: "", created_at: "20231207", charged_at: "20231207" },
  { company: "Xoom", amount: "11000", status: "", created_at: "20231208", charged_at: "20231208" },
  { company: "RIA", amount: "13000", status: "", created_at: "20231209", charged_at: "20231209" },
  { company: "Wise", amount: "14000", status: "", created_at: "20231210", charged_at: "20231210" },
  { company: "Skrill", amount: "7000", status: "", created_at: "20231211", charged_at: "20231211" },
  { company: "Neteller", amount: "9500", status: "", created_at: "20231212", charged_at: "20231212" },
  { company: "Western Union", amount: "16000", status: "", created_at: "20231213", charged_at: "20231213" },
  { company: "MoneyGram", amount: "12500", status: "", created_at: "20231214", charged_at: "20231214" },
  { company: "PayPal", amount: "8500", status: "", created_at: "20231215", charged_at: "20231215" },
  { company: "WorldRemit", amount: "10250", status: "", created_at: "20231216", charged_at: "20231216" },
  { company: "Remitly", amount: "9300", status: "", created_at: "20231217", charged_at: "20231217" },
  { company: "Xoom", amount: "11800", status: "", created_at: "20231218", charged_at: "20231218" },
  { company: "RIA", amount: "13500", status: "", created_at: "20231219", charged_at: "20231219" },
  { company: "Wise", amount: "14500", status: "", created_at: "20231220", charged_at: "20231220" },
  { company: "Skrill", amount: "7800", status: "", created_at: "20231221", charged_at: "20231221" },
  { company: "Neteller", amount: "9900", status: "", created_at: "20231222", charged_at: "20231222" },
];

// Create the remittances table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS remittances (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT NOT NULL,
      amount TEXT NOT NULL,
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
