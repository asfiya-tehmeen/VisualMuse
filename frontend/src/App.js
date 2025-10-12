import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [context, setContext] = useState('');
  const [tone, setTone] = useState('');
  const [platform, setPlatform] = useState('');
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/generate-text`, { context, tone, platform });
    setGeneratedText(res.data.text);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-4">Visual Muse</h1>
      <div className="mb-4">
        <input className="border p-2 mr-2" placeholder="Context" value={context} onChange={e => setContext(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Tone" value={tone} onChange={e => setTone(e.target.value)} />
        <input className="border p-2 mr-2" placeholder="Platform" value={platform} onChange={e => setPlatform(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleGenerate}>Generate Text</button>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Generated Copy</h2>
        <div>{generatedText}</div>
      </div>
    </div>
  );
}

export default App;
