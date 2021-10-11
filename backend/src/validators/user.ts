import { celebrate, Segments, Joi } from 'celebrate';

const validateUserData = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().min(1).required(),
  }),
});

export default validateUserData;
