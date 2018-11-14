import Joi from 'joi';

// eslint-disable-next-line import/prefer-default-export
export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

export default {
  signup: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
    lastName: Joi.string().required(),
    firstName: Joi.string().required(),
    userName: Joi.string().required(),
  },
};
