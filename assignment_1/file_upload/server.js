const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const upload = require("./uploads/multerConfig");

app.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.send(`File uploaded successfully: ${req.file.originalname}`);
  } else {
    res.status(400).send("No file uploaded or file type/size not allowed");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
