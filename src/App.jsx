import { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState(null);
useEffect(() => {
  // पूरे URL के साथ फेच करो ताकि कोई कन्फ्यूजन न रहे
  fetch('http://65.0.178.205/api/') 
    .then(res => res.json())
    .then(data => {
      console.log("Backend response:", data); // यह कंसोल में डेटा प्रिंट करेगा
      setBackendData(data);
    })
    .catch(err => {
      console.error("Fetch error:", err);
      setMessage("Error connecting to backend ❌");
    });
}, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>My Full-Stack App</h1>
      {backendData ? (
        <div style={{ background: '#e0ffe0', padding: '15px', borderRadius: '8px' }}>
          <h3>Backend Status: {backendData.status} ✅</h3>
	  <h4>CI/CD pipline is also integrated in this now</h4>
          <p>Message: {backendData.message}</p>
          <small>Server Time: {new Date(backendData.timestamp).toLocaleString()}</small>
        <p style="color: green; font-size: 24px; text-align: center; font-weight: bold; margin-top: 20px;">🔥 GitHub Actions CI/CD is fully Functional!</p></div>
      ) : (
        <p>Connecting to Express Backend...</p>
      )}
    <p style="color: green; font-size: 24px; text-align: center; font-weight: bold; margin-top: 20px;">🔥 GitHub Actions CI/CD is fully Functional!</p></div>
  );
}

export default App;
