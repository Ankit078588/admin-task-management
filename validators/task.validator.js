import Joi from "joi";

export const createTaskSchema = Joi.object({
  task_name: Joi.string()
    .min(3)
    .required()
    .messages({
      "string.base": "Task name must be a string",
      "string.empty": "Task name cannot be empty",
      "string.min": "Task name must be at least 3 characters long",
      "any.required": "Task name is required"
    }),

  task_description: Joi.string()
    .required()
    .messages({
      "string.base": "Task description must be a string",
      "string.empty": "Task description cannot be empty",
      "any.required": "Task description is required"
    }),

  task_type: Joi.array()
    .items(
      Joi.string().valid(
        "a-task",
        "b-task",
        "c-task",
        "d-task",
        "e-task"
      )
    )
    .min(1)
    .required()
    .messages({
      "array.base": "Task type must be an array",
      "array.min": "At least one task type must be selected",
      "any.only": "Invalid task type selected",
      "any.required": "Task type is required"
    }),

  start_date: Joi.date()
    .required()
    .messages({
      "date.base": "Start date must be a valid date",
      "any.required": "Start date is required"
    }),

  end_date: Joi.date()
    .greater(Joi.ref("start_date"))
    .required()
    .messages({
      "date.base": "End date must be a valid date",
      "date.greater": "End date must be greater than start date",
      "any.required": "End date is required"
    })
});
