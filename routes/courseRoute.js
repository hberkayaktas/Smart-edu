const express = require("express");
const courseController = require("../controllers/courseControllers");

const router = express.Router();

router.route("/").post(courseController.createCourse); // http://localhost:3000/courses
router.route("/").get(courseController.getAllCourses);
router.route("/:id").get(courseController.getCourse); // http://localhost:3000/courses/şajdfkafuıe6549 gibi bir link

//örnek
router.route("/yeni").post(courseController.createCourse); // http://localhost:3000/courses/yeni

module.exports = router;
