import { CreateUserParams } from "../protocols";

import Joi from "joi";

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  repeatPassword: Joi.string().min(10).required(),
});
