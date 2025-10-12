import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import axios from 'axios';
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Proxy to FastAPI for text generation
app.post('/generate-text', async (req, res) => {
  try {
    const { context, tone, platform } = req.body;
    const response = await axios.post(`${process.env.PYTHON_API_URL}/generate-text`, { context, tone, platform });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Text generation failed', details: err.message });
  }
});

// Proxy to FastAPI for image generation
app.post('/generate-image', async (req, res) => {
  try {
    const { prompt, style, format } = req.body;
    const response = await axios.post(`${process.env.PYTHON_API_URL}/generate-image`, { prompt, style, format });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Image generation failed', details: err.message });
  }
});

// Proxy to FastAPI for brand kit application
app.post('/apply-brand-kit', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.PYTHON_API_URL}/apply-brand-kit`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Brand kit application failed', details: err.message });
  }
});

// Export endpoint
app.post('/export', async (req, res) => {
  try {
    const response = await axios.post(`${process.env.PYTHON_API_URL}/export`, req.body, { responseType: 'arraybuffer' });
    res.set('Content-Type', response.headers['content-type']);
    res.send(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Export failed', details: err.message });
  }
});

// Supabase asset upload example
app.post('/upload-asset', async (req, res) => {
  try {
    const { file, fileName } = req.body; // file should be base64 or binary
    const { data, error } = await supabase.storage.from('assets').upload(fileName, Buffer.from(file, 'base64'));
    if (error) throw error;
    res.json({ url: data.Key });
  } catch (err) {
    res.status(500).json({ error: 'Asset upload failed', details: err.message });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Node.js API Gateway running on port ${process.env.PORT || 5000}`);
});
