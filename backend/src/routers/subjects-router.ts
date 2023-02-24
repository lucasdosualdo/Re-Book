import { Router } from "express";
import { getSubject } from "../controllers/search-books-controller";
import { validateQuery } from "../middlewares/validation-middleware";
import { subjectsSchema } from "../schemas/subjects-schema";

const subjectsRouter = Router();

subjectsRouter.get("/", validateQuery(subjectsSchema), getSubject);

export { subjectsRouter };
