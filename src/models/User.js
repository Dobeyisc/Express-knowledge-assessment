import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    username: {
        type: String,
        unique: true
    }, 
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        unique: true
    }, 
    roles: [{
        ref: "role",
        type: Schema.Types.ObjectId
    }, ]
}, {
    timestamps: true,
    versionKey: false
    }
);

  userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }
  
  userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
      return next();
    }
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  })

export default model("User", userSchema)