const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentCourseEnrollmentSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId
  },
  course: {
    type: Schema.Types.ObjectId
  }
}, {timestamps: true})

const StudentCourseEnrollment = mongoose.model('course', studentCourseEnrollmentSchema);

module.exports = StudentCourseEnrollment;