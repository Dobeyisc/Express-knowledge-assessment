import {Schema, model} from "mongoose";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    }, 
    completed: {
      type: Boolean,
      require: true,
    }, 
    description: {
      type: String,
      require: true
    }
}, {
    versionKey: false,
    timestamps: true
})
 export default model("Tasksgestion", taskSchema);
