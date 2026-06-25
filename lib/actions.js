'use server';

import { saveRemittance } from "./remittances.js";

export async function actionSaveRemittance(code) {
  console.log("Saving remittance with code:", code);
  await saveRemittance(code);
}
