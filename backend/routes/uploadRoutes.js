const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

router.post("/", upload.single("document"), (req, res) => {
  res.json({
    success: true,
    file: req.file,
  });
});

module.exports = router;