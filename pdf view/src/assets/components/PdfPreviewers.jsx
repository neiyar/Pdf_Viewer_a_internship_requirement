//import React from 'react'
import { Worker, Viewer } from '@react-pdf-viewer/core';


import '@react-pdf-viewer/core/lib/styles/index.css';


const workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js";

const PdfPreviewer= ({fileUrl}) => {
  return (
    <Worker workerUrl= {workerUrl}>
    <div className= "preview-container">
    <h2 className="preview-heading">Preview:</h2>
    <Viewer fileUrl= {fileUrl} />
    </div>
    </Worker>
  );
};

export default PdfPreviewer
