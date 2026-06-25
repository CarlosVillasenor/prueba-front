'use server';

import { remittanceCodeExists, saveRemittance } from "./remittances.js";
import { redirect } from 'next/navigation';

export async function actionSaveRemittance(code) {
  console.log("Saving remittance with code:", code);

  if (remittanceCodeExists(code)) {
    console.log("Remittance code already exists:", code);
    return { success: false, message: "Code already exists" };
  }

  await saveRemittance(code);

  redirect('/transacciones');
}
