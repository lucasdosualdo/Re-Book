import { Router } from "express";
import { getSearch } from "../controllers/search-books-controller";
import { getSearchedBook } from "../controllers/search-books-controller";

const searchBooksRouter = Router();

searchBooksRouter.get("/", getSearch).get("/:bookId", getSearchedBook);

export { searchBooksRouter };
