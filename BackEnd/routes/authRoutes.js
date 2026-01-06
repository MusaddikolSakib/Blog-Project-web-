const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register Route
router.post("/register", authController.register);

// Login Route (Added this)
router.post("/login", authController.login);

module.exports = router;