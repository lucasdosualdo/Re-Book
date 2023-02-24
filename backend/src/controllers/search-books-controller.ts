import { Request, Response } from "express";
import httpStatus from "http-status";
import searchBooksService from "../services/search-books-service";
import { SubjectParams } from "../protocols";

export async function getSearch(req: Request, res: Response) {
  const { searchTerm } = req.query as { searchTerm: string };
  if (!searchTerm) return res.sendStatus(httpStatus.BAD_REQUEST);
  try {
    const books = await searchBooksService.searchBooks(searchTerm);
    return res.status(httpStatus.OK).send(books);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getSubject(req: Request, res: Response) {
  const { subject } = req.query as { subject: SubjectParams };
  if (!subject) return res.sendStatus(httpStatus.BAD_REQUEST);
  try {
    const books = await searchBooksService.searchBySubject(subject);
    return res.status(httpStatus.OK).send(books);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
