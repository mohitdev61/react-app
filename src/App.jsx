import { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState(null);
useEffect(() => {
  fetch('/api/') 
    .then(res => res.json())
    .then(data => {
      setBackendData(data);
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setMessage("Error connecting to backend ❌");
    });
}, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ravya's Gaming Application Start</h1>
      {backendData ? (
        <div style={{ background: '#e0ffe0', padding: '15px', borderRadius: '8px' }}>
          <h3>Backend Status: {backendData.status} ✅</h3>
          <p>Message: {backendData.message}</p>
          <small>Server Time: {new Date(backendData.timestamp).toLocaleString()}</small>
        </div>
      ) : (
        <p>Connecting to Express Backend...</p>
      )}
    </div>
  );
}

export default App;
