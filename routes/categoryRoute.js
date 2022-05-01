const express = require("express");
const categoryController = require("../controllers/categoryControllers");

const router = express.Router();

router.route("/").post(categoryController.createCategory); // http://localhost:3000/categories
router.route("/:id").delete(categoryController.deleteCategory); 


module.exports = router;
