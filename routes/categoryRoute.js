const express = require("express");
const categoryController = require("../controllers/categoryControllers");

const router = express.Router();

router.route("/").post(categoryController.createCategory); // http://localhost:3000/categorys


module.exports = router;
