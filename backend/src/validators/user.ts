import { celebrate, Segments, Joi } from 'celebrate';

const validateUserData = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(2).required(),
  }),
});

export default validateUserData;
