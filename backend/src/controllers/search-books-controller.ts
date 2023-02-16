import { Request, Response } from "express";
import httpStatus from "http-status";
import searchBooksService from "../services/search-books-service";

export async function getSearch(req: Request, res: Response) {
  const { searchTerm } = req.query as { searchTerm: string };
  await searchBooksService.searchBooks(searchTerm);
  try {
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
