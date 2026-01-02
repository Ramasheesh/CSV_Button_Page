import express from 'express';
import cors from 'cors';
import { readCSV, getButtonById } from './utils/csvReader.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/buttons', async (req, res) => {
  try {
    const buttons = await readCSV();
    res.json(buttons);
  } catch (error) {
    console.error('Error reading CSV:', error);
    res.status(500).json({
      error: 'Failed to fetch buttons',
      message: error.message
    });
  }
});

app.get('/api/button/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const button = await getButtonById(id);

    if (!button) {
      return res.status(404).json({
        error: 'Button not found',
        message: `No button found with ID: ${id}`
      });
    }

    res.json(button);
  } catch (error) {
    console.error('Error fetching button:', error);
    res.status(500).json({
      error: 'Failed to fetch button',
      message: error.message
    });
  }
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API endpoints:`);
  console.log(`  GET /api/buttons - Get all buttons`);
  console.log(`  GET /api/button/:id - Get button by ID`);
});
