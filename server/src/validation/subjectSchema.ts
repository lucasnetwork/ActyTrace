import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
  }),
  [Segments.HEADERS]: Joi.object().keys({
    Authorization: Joi.string().required(),
  }),
});
