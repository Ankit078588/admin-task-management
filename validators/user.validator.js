import Joi from "joi";


export const signupSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(2)
    .required()
    .messages({
      'string.empty': 'Name is required',
      'string.min': 'Name must be at least 2 characters long',
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .email()
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please provide a valid email address',
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.empty': 'Password is required',
      'string.min': 'Password must be at least 6 characters long',
    }),

  gender: Joi.string()
    .valid('male', 'female', 'others')
    .required()
    .messages({
      'any.only': 'Gender must be male, female, or others',
    }),

  role: Joi.string()
    .valid('super-admin', 'admin', 'manager', 'user')
    .required()
    .messages({
      'any.only': 'Role must be one of super-admin, admin, manager, or user',
      'any.required': 'Role is required'
    }),
});

