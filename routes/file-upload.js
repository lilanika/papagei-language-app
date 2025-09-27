const express = require("express");
const router = express.Router();

// include CLOUDINARY:

const uploader = require("../config/cloudinary-setup");
const User = require("../models/User.model");

router.post(
  "/upload/:userId",
  uploader.single("imageUrl"),
  (req, res, next) => {
    console.log(" Ola from req.params", req.params);
    console.log(" Ola from req.file.path ", req.file.path);

    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }

    User.findByIdAndUpdate(
      req.params.userId,
      {
        imageUrl: req.file.path,
      },
      { new: true }
    )
      .then((user) => {
        console.log(user);
        return res.json(user); // ← ADD 'return' HERE
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json({ error: "Update failed" }); // ← ADD ERROR HANDLING
      });

    // REMOVE THIS LINE: res.json({ secure_url: req.file.path });
  }
);

module.exports = router;
