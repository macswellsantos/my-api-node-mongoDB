import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    rtequire: true,
  },
  value: {
    type: Number,
    require: true,
    min: 0,
  },
});

const studentModel = mongoose.model('student', studentSchema, 'student');

export { studentModel };
