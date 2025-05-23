const Joi = require("joi");

// Registration details Validation=============>
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Name is required.",
      "string.min": "Name must be atleast {#limit} charcter long.",
      "string.max": "Name cannot exceed {#limit} charcter",
    }),
    branch_id: Joi.string().required().messages({
      "string.empty": "Branch is required.",
    }),

    email: Joi.string().email().required().messages({
      "string.empty": "email is required.",
      "string.email": "Please provide a valid email address",
    }),

    phone: Joi.string()
      .length(10)
      .pattern(/^[789]\d{9}$/)
      .required()
      .messages({
        "string.empty": "Phone number is required.",
        "string.length": "Phone number must be exactly 10 digits.",
        "string.pattern.base": "Phone number must contain only numeric value.",
      }),

    password: Joi.string()
      .min(8)
      .max(25)
      .required()
      .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
      .messages({
        "string.empty": "Password is mandatory.",
        "string.min": "Password must be {#limit} character long.",
        "string.max": "Password must be {#limit} charcter long only.",
        "string.pattern.base":
          "Password must contain atleast one Uppercase character, Lowercase character, one symbol and numbers",
      }),

    confirm_password: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({
        "string.empty": "Confirm Password is required",
        "string.valid": "Confirm Password must match the password",
      }),
  });
  return schema.validate(data);
};

// Update Employee Validation =================>
const updateEmpValidation = (data) => {
  const schema = Joi.object({
    emp_id: Joi.string().required().messages({
      "string.empty": "Employee Id is required."
    }),
    name: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Name is required.",
      "string.min": "Name must be atleast {#limit} charcter long.",
      "string.max": "Name cannot exceed {#limit} charcter",
    }),
    branch_id: Joi.string().required().messages({
      "string.empty": "Branch is required.",
    }),

    email: Joi.string().email().required().messages({
      "string.empty": "email is required.",
      "string.email": "Please provide a valid email address",
    }),

    phone: Joi.string()
      .length(10)
      .pattern(/^[789]\d{9}$/)
      .required()
      .messages({
        "string.empty": "Phone number is required.",
        "string.length": "Phone number must be exactly 10 digits.",
        "string.pattern.base": "Phone number must contain only numeric value.",
      }),
    
    role: Joi.string().valid('admin', 'employee', 'manager').required({
      "string.empty":"Role is required"
    }),

    password: Joi.string()
      .min(8)
      .max(25)
      .required()
      .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
      .messages({
        "string.empty": "Password is mandatory.",
        "string.min": "Password must be {#limit} character long.",
        "string.max": "Password must be {#limit} charcter long only.",
        "string.pattern.base":
          "Password must contain atleast one Uppercase character, Lowercase character, one symbol and numbers",
      }),

    confirm_password: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({
        "string.empty": "Confirm Password is required",
        "string.valid": "Confirm Password must match the password",
      }),
  });
  return schema.validate(data);
};
  
// Branch details Validation===================>
const branchValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().messages({
      "string.empty": "Branch Name is required!",
    }),
    building: Joi.string().required().messages({
      "string.empty": "Building No. is required!",
    }),
    street: Joi.string().required().messages({
      "string.empty": "Street Address is required!",
    }),
    city: Joi.string().required().messages({
      "string.empty": "City is required!",
    }),
    country: Joi.string().required().messages({
      "string.empty": "Country is required!",
    }),
    pincode: Joi.string().length(6).required().messages({
      "string.empty": "Postal Code is required!",
    }),
  });

  return schema.validate(data);
};

module.exports = { registerValidation, branchValidation, updateEmpValidation };
