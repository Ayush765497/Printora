import { useState } from "react";
import API from "../api/api";

function Upload() {
 const [file, setFile] = useState(null);
 const [copies, setCopies] = useState(1);
 const [paperSize, setPaperSize] = useState("A4");
 const [printType, setPrintType] = useState("Black & White");
 const [printSide, setPrintSide] = useState("Single Side");
 const [binding, setBinding] = useState(false);
 const [lamination, setLamination] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("document", file);

    try {
      const res = await API.post("/upload", formData);

      alert("File Uploaded Successfully ✅");
      console.log(res.data);
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    }
  };

  return (
    <section className="upload-section">
      <h2>Upload Your Document</h2>

      <div className="upload-box">
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setFile(e.target.files[0])}
        />

        {file && (
          <div className="file-info">
            <p><strong>File:</strong> {file.name}</p>
            <p>
              <strong>Size:</strong>{" "}
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </p>
          </div>
        )}

        <button onClick={handleUpload}>
          Upload File
        </button>

        <hr />

        <h3>Print Options</h3>

        <select
          value={paperSize}
          onChange={(e) => setPaperSize(e.target.value)}
        >
          <option>A4</option>
          <option>A3</option>
          <option>A2</option>
        </select>

        <select
          value={printType}
          onChange={(e) => setPrintType(e.target.value)}
        >
          <option>Black & White</option>
          <option>Color Print</option>
        </select>

        <input
          type="number"
          min="1"
          value={copies}
          onChange={(e) => setCopies(e.target.value)}
        />

        <button>Continue</button>
      </div>
    </section>
  );
}

export default Upload;