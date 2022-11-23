const Course = require("../models/course")

module.exports.register_course_get = async (req, res) => {
  const courses = await Course.find();

  res.render('enrollment/enroll', {courses});
}

module.exports.register_course_post = async (req, res) => {
  console.log(req.body);
}