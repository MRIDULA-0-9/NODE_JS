const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
name: {
type: String,
required: true
},
age: {
type: Number,
min: 18
},
department: String,
email: {
type: String,
unique: true
}
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;

//npm install mongoose

//mongodb://127.0.0.1:27017/studentDB