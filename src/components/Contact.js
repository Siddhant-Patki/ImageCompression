import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './image.css';

function Contact() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = useCallback((acceptedFiles) => {
    // Handle the dropped files
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: 'image/*', // Specify accepted file types (images in this case)
    maxFiles: 1, // Limit to a single file
  });

  const handleUpload = () => {
    // Handle the file upload logic (e.g., send the file to a server).
    if (selectedFile) {
      console.log('Uploading file:', selectedFile);
      // Add your upload logic here
    } else {
      console.log('No file selected.');
    }
  };

  return (
    <div className="container">
      <h2 className="center">Resize Images Online</h2>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image here, or click to select an image</p>
        <button className="choose-file-btn" onClick={() => document.querySelector('input').click()}>
          Choose File
        </button>
      </div>
      {selectedFile && (
        <div className="center">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
      <button className="upload-btn center" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Contact;
