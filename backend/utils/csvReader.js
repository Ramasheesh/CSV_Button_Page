import fs from 'fs';
import csv from 'csv-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readCSV() {
  const results = [];
  const csvPath = path.join(__dirname, '../data.csv');

  return new Promise((resolve, reject) => {
    if (!fs.existsSync(csvPath)) {
      reject(new Error('CSV file not found'));
      return;
    }

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
}

export async function getButtonById(id) {
  try {
    const buttons = await readCSV();
    return buttons.find(button => button.id === id.toString());
  } catch (error) {
    throw error;
  }
}
