const express = require("express");
const courseController = require("../controllers/courseControllers");
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.route("/").post(roleMiddleware(["teacher","admin"]) ,courseController.createCourse); // http://localhost:3000/courses
router.route("/").get(courseController.getAllCourses);
router.route("/:slug").get(courseController.getCourse); // http://localhost:3000/courses/html-dersleri gibi bir link
router.route("/:slug").delete(courseController.deleteCourse); // http://localhost:3000/courses/html-dersleri gibi bir link
router.route("/:slug").put(courseController.updateCourse); // http://localhost:3000/courses/html-dersleri gibi bir link
router.route("/enroll").post(courseController.enrollCourse);
router.route("/release").post(courseController.releaseCourse);

//örnek
router.route("/yeni").post(courseController.createCourse); // http://localhost:3000/courses/yeni

module.exports = router;
