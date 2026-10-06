import { useEffect, useState } from 'react';

function App() {
  // 1. स्टेट्स (States)
  const [backendData, setBackendData] = useState(null);
  const [images, setImages] = useState([]); // RDS से आने वाली इमेजेस के लिए
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 2. बैकएंड हेल्थ स्टेटस चेक करने का फंक्शन (आपका पुराना लॉजिक)
  const checkBackendHealth = () => {
    fetch('/api/')
      .then(res => res.json())
      .then(data => setBackendData(data))
      .catch(err => {
        console.error("Fetch error:", err);
        setErrorMessage("Error connecting to backend ❌");
      });
  };

  // 3. AWS RDS डेटाबेस से सारी इमेजेस लाइव फेच करने का फंक्शन
  const fetchGalleryImages = () => {
    fetch('/api/images')
      .then(res => res.json())
      .then(resData => {
        if (resData.success) {
          setImages(resData.data);
        }
      })
      .catch(err => console.error("Error fetching images:", err));
  };

  // पेज लोड होते ही दोनों चीजें फेच करो
  useEffect(() => {
    checkBackendHealth();
    fetchGalleryImages();
  }, []);

  // 4. फाइल सिलेक्शन हैंडलर
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  // 5. फॉर्म सबमिट करके S3 + RDS पर अपलोड करने का फंक्शन
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) return alert("कृपया पहले एक इमेज चुनें!");

    const formData = new FormData();
    formData.append('image', selectedFile);

    setUploading(true);

    fetch('/api/upload', {
      method: 'POST',
      body: formData // Fetch अपने आप सही Content-Type Boundary सेट कर लेगा
    })
      .then(res => res.json())
      .then(resData => {
        if (resData.success) {
          alert("इमेज सफलतापूर्वक अपलोड और RDS में सेव हो गई! 🎉");
          setSelectedFile(null);
          document.getElementById("fileInput").value = ""; // इनपुट खाली करें
          fetchGalleryImages(); // गैलरी को तुरंत रिफ्रेश करें ताकि नई इमेज दिखे
        } else {
          alert("अपलोड फेल: " + resData.message);
        }
      })
      .catch(err => {
        console.error("Upload error:", err);
        alert("सर्वर एरर: अपलोड फेल हो गया!");
      })
      .finally(() => {
        setUploading(false);
      });
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto', color: '#333' }}>
      <h1>Testing Gaming Application Start</h1>
      
      {/* 🟢 बैकएंड स्टेटस बॉक्स */}
      {backendData ? (
        <div style={{ background: '#e0ffe0', padding: '15px', borderRadius: '8px', marginBottom: '30px', border: '1px solid #b7eb8f' }}>
          <h3>Backend Status: {backendData.status} ✅</h3>
          <p style={{ margin: '5px 0' }}>Message: {backendData.message}</p>
          <small style={{ color: '#666' }}>Server Time: {new Date(backendData.timestamp).toLocaleString()}</small>
        </div>
      ) : (
        <div style={{ background: '#fffbe6', padding: '15px', borderRadius: '8px', marginBottom: '30px', border: '1px solid #ffe58f' }}>
          <p style={{ margin: 0 }}>Connecting to Express Backend... {errorMessage}</p>
        </div>
      )}

      <hr style={{ border: '0', height: '1px', background: '#ccc', margin: '40px 0' }} />

      {/* 📤 लाइव S3 इमेज अपलोड फॉर्म */}
      <div style={{ background: '#f5f5f5', padding: '25px', borderRadius: '8px', border: '1px solid #e8e8e8', marginBottom: '40px' }}>
        <h2 style={{ marginTop: 0 }}>📸 Live S3 Media Uploader</h2>
        <form onSubmit={handleUploadSubmit} style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <input 
            id="fileInput" 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            style={{ padding: '8px', background: 'white', borderRadius: '4px', border: '1px solid #d9d9d9' }} 
          />
          <button 
            type="submit" 
            disabled={uploading} 
            style={{ 
              padding: '10px 24px', 
              background: uploading ? '#bfbfbf' : '#1890ff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: uploading ? 'not-allowed' : 'pointer',
              fontWeight: 'bold'
            }}
          >
            {uploading ? 'Uploading to AWS S3...' : 'Upload Image'}
          </button>
        </form>
      </div>

      {/* 🖼️ AWS RDS लाइव गैलरी ग्रिड */}
      <h2>🖼️ AWS RDS Database Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '25px', marginTop: '20px' }}>
        {images.length === 0 ? (
          <p style={{ color: '#999', italic: 'true', gridColumn: '1/-1' }}>डेटाबेस में अभी कोई इमेज नहीं है। ऊपर फॉर्म से पहली इमेज लाइव अपलोड करें!</p>
        ) : (
          images.map((img) => (
            <div key={img.id} style={{ border: '1px solid #f0f0f0', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', background: 'white' }}>
              <img 
                src={img.s3Url} 
                alt={img.fileName} 
                style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }} 
              />
              <div style={{ padding: '15px' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: 'bold', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                  {img.fileName}
                </p>
                <small style={{ color: '#aaa' }}>
                  Saved At: {new Date(img.createdAt).toLocaleDateString()}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;