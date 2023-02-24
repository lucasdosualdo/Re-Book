import { Router } from "express";
import { validateBody } from "../middlewares/validation-middleware";
import { createUserSchema } from "../schemas/users-schema";

import { usersPost } from "../controllers/users-controller";

const usersRouter = Router();

usersRouter.post("/", validateBody(createUserSchema), usersPost);

export { usersRouter };
