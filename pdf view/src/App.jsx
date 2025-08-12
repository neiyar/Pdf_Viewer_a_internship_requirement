import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import PdfPreviewer from './assets/components/PdfPreviewers';

import FileUploder from "./assets/components/FileUploder"

function App() {
  const [fileUrl, setFileUrl] = useState("");

  const handleFileSelect = file => {
    setFileUrl(URL.createObjectURL(file));
  };

  
  return (
    <div className="app-container">

      <h1 className="app-tittle"></h1> 
      < FileUploder onFileSelect ={handleFileSelect} />
      {fileUrl && <PdfPreviewer fileUrl={fileUrl} />}
    </div>
  )
}
export default App
