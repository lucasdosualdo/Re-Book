import { Router } from "express";
import { getSearch } from "../controllers/search-books-controller";

const searchBooksRouter = Router();

searchBooksRouter.get("/", getSearch);

export { searchBooksRouter };
