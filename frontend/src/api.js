// Example fetch code for connecting frontend to backend
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const generateText = async (context, tone, platform) => {
  const res = await axios.post(`${API_URL}/generate-text`, { context, tone, platform });
  return res.data;
};

export const generateImage = async (prompt, style, format) => {
  const res = await axios.post(`${API_URL}/generate-image`, { prompt, style, format });
  return res.data;
};

export const applyBrandKit = async (brandKitData) => {
  const res = await axios.post(`${API_URL}/apply-brand-kit`, brandKitData);
  return res.data;
};

export const exportAssets = async (exportData) => {
  const res = await axios.post(`${API_URL}/export`, exportData, { responseType: 'blob' });
  return res.data;
};
