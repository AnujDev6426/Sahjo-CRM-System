const Joi = require("joi");

// Registration details Validation===========================>
const registerValidation = (data) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required().messages({
            "string.empty": "Name is required.",
            "string.min": "Name must be atleast {#limit} charcter long.",
            "string.max": "Name cannot exceed {#limit} charcter",
        }),
        branch: Joi.string().min(3).max(50).required().messages({
            "string.empty": "Branch is required.",
            "string.min": "Branch must be atleast {#limit} charcter long.",
            "string.max": "Branch cannot exceed {#limit} charcter",
        }),

        email: Joi.string().email().required().messages({
            "string.empty": "email is required.",
            "string.email": "Please provide a valid email address",
        }),

        mobile: Joi.string()
            .length(10)
            .pattern(/^[789]\d{9}$/)
            .required()
            .messages({
                "string.empty": "Mobile number is required.",
                "string.length": "Mobile number must be exactly 10 digits.",
                "string.pattern.base": "Mobile number must contain only numeric value.",
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
                "string.pattern.base":"Password must contain atleast one Uppercase character, Lowercase character, one symbol and numbers",
            }),

        confirm_password: Joi.string()
            .valid(Joi.ref("password"))
            .required()
            .messages({
                "string.empty": "Confirm Password is required",
                "string.valid": "Confirm Password must match the password",
            })
    });
    return schema.validate(data);
};


// Login details Validation====================================>
const loginValidation = (data) => {
    const schema = Joi.object({
        mobile: Joi.string()
            .length(13)
            .pattern(/^\+(\d{1,4})(\d{7,15})/)
            .optional()
            .messages({
                "string.length": "Invalid Mobile Number.",
                "string.pattern.base": "Invalid Mobile Number."
            }),
        email: Joi.string()
            .email()
            .optional()
            .messages({
                "string.email": "Invalid Email.",
            }),
        password: Joi.string()
            .min(8)
            .max(25)
            .optional()
            .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
            .messages({
                "string.empty": "Password is mandatory.",
                "string.min": "Password must be {#limit} character long.",
                "string.max": "Password must be {#limit} charcter long only.",
                "string.pattern.base": "Password must contain atleast one Uppercase character, Lowercase character, one symbol and numbers",
            })
    });
    return schema.validate(data);
};


// Forget Password====================================================>
const forgetPasswordValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.empty": "Email is required",
            "string.email": "Enter a valid Email",
        }),
    });
    return schema.validate(data);
};

// reset Password====================================================>
const resetPasswordValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().messages({
            "string.empty": "Email is required",
            "string.email": "Enter a valid Email",
        }),

        newPassword: Joi.string()
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

        confirm_newPassword: Joi.string()
            .valid(Joi.ref("newPassword"))
            .required()
            .messages({
                "string.empty": "Confirm Password is required",
                "string.valid": "Confirm Password must match the password",
            }),
    });
    return schema.validate(data);
};


module.exports = { registerValidation, loginValidation, forgetPasswordValidation, resetPasswordValidation };

