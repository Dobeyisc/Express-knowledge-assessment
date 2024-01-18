import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Role from "../models/Role.js";
import { SECRET } from "../config.js";
import {responseSuccess, errorResponseFailed, sendErrorServer} from "../error_messages/messages.js"

export const signupHandler = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    // Creating a new User Object
    const newUser = new User({
      username,
      email,
      password,
    });

    // checking for roles
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Saving the User Object in Mongodb
    const savedUser = await newUser.save();

    // Create a token
    const token = jwt.sign({ id: savedUser._id }, SECRET, {
      expiresIn: 43200, // 12 hours
    });

    responseSuccess(res,{ token });
  } catch (error) {
    sendErrorServer(res,error);
  }
};

export const signinHandler = async (req, res) => {
  try {
    // Request body email can be an email or username
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound) {
      errorResponseFailed(res);
      return;
    };

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword) {
      sendErrorServer(res, { message: "Invalid Password" });
      return;
    }

    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 43200, // 12 hours
    });

    responseSuccess(res, { token });
  } catch (error) {
    sendErrorServer(res, error);
  }
};