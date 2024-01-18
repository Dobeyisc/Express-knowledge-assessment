import {Schema, model} from "mongoose";

const taskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean
}, {
  timestamps: true,
  versionKey: true
})
 export default model("Tasksgestion", taskSchema);
