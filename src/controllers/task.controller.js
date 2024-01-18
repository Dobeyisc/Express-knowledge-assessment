import Task from '../models/Task';
import { responseSuccess, sendErrorServer, errorResponseFailed } from '../error_messages/messages';

export const createTask = async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const newTask = new Task({ title, description, completed });
    const taskSaved = await newTask.save();
    
    responseSuccess(res, taskSaved, 201);
  } catch (error) {
    sendErrorServer(res, error);
  }
};

export const getTaskById = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);
    if (!task) {
      errorResponseFailed(res);
      return;
    }

    responseSuccess(res, task);
  } catch (error) {
    sendErrorServer(res, error);
  }
};

export const getTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    responseSuccess(res, tasks);
  } catch (error) {
    sendErrorServer(res, error);
  }
};

export const updateTaskById = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.taskId,
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      errorResponseFailed(res);
      return;
    }

    responseSuccess(res, updatedTask, 201);
  } catch (error) {
    sendErrorServer(res, error);
  }
};

export const deleteTaskById = async (req, res) => {
  const { taskId } = req.params;

  try {
    await Task.findByIdAndDelete(taskId);
    responseSuccess(res);
  } catch (error) {
    sendErrorServer(res, error);
  }
};
