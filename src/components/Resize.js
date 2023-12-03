import React, { useState } from 'react';

function Resize() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    //upload logic
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div>
      <h2>Image Uploader</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Resize;
