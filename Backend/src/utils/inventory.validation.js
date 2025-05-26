const Joi = require("joi");

const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

const inventoryValidation = (data) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        consignor: Joi.string().required(),
        consignor_gst: Joi.string().pattern(gstRegex).optional().messages({
            "string.pattern.base": "Invalid GST number format for consignor."
        }),
        consignee: Joi.string().required(),
        consignee_gst: Joi.string().pattern(gstRegex).optional().messages({
            "string.pattern.base": "Invalid GST number format for consignee."
        }),
        grNo: Joi.string().required().messages({
            "string.empty": "GR No. is required."
        }),
        source: Joi.string().required().messages({
            "string.empty": "Source is required."
        }),
        destination: Joi.string().required().messages({
            "string.empty": "Destination is required."
        }),
        billNo: Joi.number().integer().required().messages({
            "string.empty": "Bill No. is required."
        }),
        value: Joi.number().integer().min(0).optional(),
        freight: Joi.number().integer().min(0).required().messages({
            "string.empty": "Cargo Freight is required."
        }),
        weight: Joi.number().integer().min(0).required().messages({
            "string.empty": "Cargo Weight is required."
        }),
        quantity: Joi.number().integer().min(0).required().messages({
            "string.empty": "Cargo Quantity is required."
        }),
        cartage: Joi.number().integer().min(0).optional(),
        dd: Joi.number().integer().min(0).optional(),
        description: Joi.string().allow("").optional(),
        labour: Joi.number().integer().min(0).optional(),
        other: Joi.number().integer().min(0).optional(),
        remarks: Joi.string().allow("").optional(),
        order_id: Joi.string().required(),
        branch_id: Joi.string().required(),
        isOrdered: Joi.boolean().required(),
        isBilty: Joi.boolean().required(),
        status: Joi.string().valid("active", "inactive", "return").required()
    });
    
    return schema.validate(data);
}


module.exports = { inventoryValidation };