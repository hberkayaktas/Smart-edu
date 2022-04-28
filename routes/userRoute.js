const express = require("express");
const authController = require("../controllers/authControllers");

const router = express.Router();

router.route("/signup").post(authController.createUser); // http://localhost:3000/categories
router.route("/login").post(authController.loginUser); // http://localhost:3000/categories


module.exports = router;
