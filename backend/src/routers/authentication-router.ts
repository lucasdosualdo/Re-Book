import { Router } from "express";
import { signInSchema } from "../middlewares/authentication-schemas";
import { validateBody } from "../middlewares/validation-middleware";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", validateBody(signInSchema));

export { authenticationRouter };
