const Joi = require("joi");

// Login details Validation====================================>
const loginValidation = (data) => {
    const schema = Joi.object({
        phone: Joi.string()
            .length(10)
            .pattern(/^[789]\d{9}$/)
            .required()
            .messages({
                "string.length": "Invalid Mobile Number.",
                "string.pattern.base": "Invalid Mobile Number.",
                "string.empty":"Mobile No. is Required"
            }),
        // email: Joi.string()
        //     .email()
        //     .optional()
        //     .messages({
        //         "string.email": "Invalid Email.",
        //     }),
        password: Joi.string()
            .min(8)
            .max(25)
            .required()
            .pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/)
            .messages({
                "string.empty": "Password is Required.",
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


module.exports = { loginValidation, forgetPasswordValidation, resetPasswordValidation };

