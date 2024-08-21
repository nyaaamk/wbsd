const Joi = require("joi");

const schema = Joi.object({
  number: Joi.number().precision(2).required()
});

try {
  const check = schema.validateAsync({ number: 10.033 });
  console.log(" >>>\n  ========== check:", check);
} catch (err) {
  console.log(err);
}