const express = require('express')
const courseController =require('../controllers/courseController');

const router = express. Router();

router.route('/').post (courseController.createCourse); // http://localhost:3000/courses

//örnek
router.route('/yeni').post (courseController.createCourse); // http://localhost:3000/courses/yeni

module.exports = router;