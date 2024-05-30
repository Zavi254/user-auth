// routes/authRoutes.js

const express = require("express");
const router = express.Router();
const { register, login, getUser } = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post("/register", register);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", login);

// @route   GET /api/auth/user
// @desc    Get user data
// @access  Private
router.get("/user", auth, getUser);

module.exports = router;
