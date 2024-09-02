// file-upload/upload/multer-config.js

const multer = require("multer");

// Configure storage and file handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Use the original file name without adding a date
  },
});

// File filter based on file type and size
const fileFilter = (req, file, cb) => {
  const filetypes = /jpeg|jpg|png|gif|js/; // Allowed file extensions, including 'js'
  const extname = filetypes.test(file.originalname.toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("File type not allowed"), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 }, // 1MB size limit
  fileFilter,
});

module.exports = upload;
