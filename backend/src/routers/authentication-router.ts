import { Router } from "express";
import { signInSchema } from "../schemas/authentication-schemas";
import { validateBody } from "../middlewares/validation-middleware";
import { singInPost } from "../controllers/authentication-controller";

const authenticationRouter = Router();

authenticationRouter.post("/sign-in", validateBody(signInSchema), singInPost);

export { authenticationRouter };
