import { celebrate, Segments, Joi } from 'celebrate';

const validateUserData = celebrate({
  [Segments.BODY]: Joi.object().keys({
    _id: Joi.string(),
    name: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    address: Joi.string().required(),
    telephone: Joi.string().required(),
    permission: Joi.number().required().default(0),
  }),
});

export default validateUserData;
