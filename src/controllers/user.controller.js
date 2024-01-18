import User from "../models/User.js";
import Role from "../models/Role.js";
import { responseSuccess, sendErrorServer, errorResponseFailed } from "../error_messages/messages.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    // creating a new User
    const user = new User({
      username,
      email,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    // encrypting password
    user.password = await User.encryptPassword(user.password);

    // saving the new user
    const savedUser = await user.save();

    responseSuccess(res, {
      _id: savedUser._id,
      username: savedUser.username,
      email: savedUser.email,
      roles: savedUser.roles,
    });
  } catch (error) {
    sendErrorServer(res, error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    responseSuccess(res, users);
  } catch (error) {
    sendErrorServer(res, error);
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    
    if (!user) {
      errorResponseFailed(res);
      return;
    }

    responseSuccess(res, user);
  } catch (error) {
    sendErrorServer(res, error);
  }
};
