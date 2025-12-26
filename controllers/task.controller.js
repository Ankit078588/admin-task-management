import { Task } from "../models/Task.js";
import { createTaskSchema } from "../validators/task.validator.js";

export const createTask = async (req, res) => {
  try {
    const { error, value } = createTaskSchema.validate(req.body, { abortEarly: false });
    if (error) return res.status(400).json({ 
        message: "Validation failed", 
        errors: error.details.map(e => e.message) 
    });

    const task = await Task.create({ ...value, created_by: req.user.id });
    return res.status(201).json({ 
        message: "Task created successfully", 
        data: task 
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};




export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ 
        order: [["createdAt", "DESC"]]
    });
    return res.status(200).json({ 
        message: "Tasks fetched successfully", 
        count: tasks.length, 
        data: tasks 
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
