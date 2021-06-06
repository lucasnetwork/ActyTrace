import { celebrate, Joi, Segments } from 'celebrate';

export default celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    idTeacher: Joi.number().required(),
    idSubject: Joi.number().required(),
  }),
  [Segments.HEADERS]: Joi.object().keys({
    Authorization: Joi.string().required(),
  }),
});
