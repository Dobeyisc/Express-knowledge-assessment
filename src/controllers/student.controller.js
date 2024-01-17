import Student from "../models/Students";

export const createStudent = async (req, res) => {
  const { name, category, curse, imgURL } = req.body;

  try {
    const newStudent = new Student({
      name,
      category,
      curse,
      imgURL,
    });

    const studentSaved = await newStudent.save();

    res.status(201).json(studentSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const getStudentById = async (req, res) => {
  const { studentId } = req.params;

  const student = await Student.findById(studentId);
  res.status(200).json(student);
};

export const getStudent = async (req, res) => {
  const student = await Student.find();
  return res.json(student);
};

export const updateStudentById = async (req, res) => {
  const updatedStudent = await Student.findByIdAndUpdate(
    req.params.studentId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedStudent);
};

export const deleteStudentById = async (req, res) => {
  const { studentId } = req.params;

  await Student.findByIdAndDelete(studentId);
  // code 200 is ok too
  res.status(204).json();
};