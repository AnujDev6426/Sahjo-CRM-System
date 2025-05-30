const Joi = require('joi');

const orderValidation = (data) => {
    const schema = Joi.object({

        id:Joi.string().optional(),
        order_id:Joi.string().optional(),
        transfer_type: Joi.string().valid('stock_transfer', 'dispatch').required().messages({
            'string.empty': 'Transfer type is required!',
        }),

        order_status: Joi.string().valid("delivered", "pending", "in_transit", "delayed").required().messages({
            "string.empty": 'Order Status is required!'
        })


    });

    return schema.validate(data);

}

module.exports = {orderValidation}