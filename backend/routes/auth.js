const express = require("express");
const { body } = require("express-validator");
const { protect, verifyRefreshToken } = require("../middleware/auth");
const { handleValidationErrors } = require("../utils/validation");
const {
  signup,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  verifyEmail,
  updatePassword,
  refreshToken,
  logout,
  logoutAll,
} = require("../controllers/authController");

const router = express.Router();

// Validation middleware
const signupValidation = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage("Name must be between 2 and 50 characters"),
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
];

const loginValidation = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email"),
  body("password").notEmpty().withMessage("Password is required"),
];

const forgotPasswordValidation = [
  body("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("Please provide a valid email"),
];

const resetPasswordValidation = [
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
];

const updatePasswordValidation = [
  body("currentPassword")
    .notEmpty()
    .withMessage("Current password is required"),
  body("newPassword")
    .isLength({ min: 6 })
    .withMessage("New password must be at least 6 characters long")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage(
      "New password must contain at least one lowercase letter, one uppercase letter, and one number"
    ),
];

// Public routes
router.post("/signup", signupValidation, handleValidationErrors, signup);
router.post("/login", loginValidation, handleValidationErrors, login);
router.post(
  "/forgot-password",
  forgotPasswordValidation,
  handleValidationErrors,
  forgotPassword
);
router.put(
  "/reset-password/:token",
  resetPasswordValidation,
  handleValidationErrors,
  resetPassword
);
router.get("/verify-email/:token", verifyEmail);

// Token management routes
router.post("/refresh-token", verifyRefreshToken, refreshToken);

// Protected routes
router.get("/me", protect, getMe);
router.put(
  "/update-password",
  protect,
  updatePasswordValidation,
  handleValidationErrors,
  updatePassword
);
router.post("/logout", protect, logout);
router.post("/logout-all", protect, logoutAll);

module.exports = router;
