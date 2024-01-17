import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    category: String,
    curse: {
      type: Number ,
      default: 0,
    },
    imgURL: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("Student", studentSchema);