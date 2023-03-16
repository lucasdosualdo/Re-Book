import { Request, Response } from "express";
import httpStatus from "http-status";
import searchBooksService from "../services/search-books-service";
import { SubjectParams } from "../protocols";

export async function getSearch(req: Request, res: Response) {
  const { searchTerm, startIndex } = req.query as {
    searchTerm: string;
    startIndex: string;
  };

  if (!searchTerm) return res.sendStatus(httpStatus.BAD_REQUEST);
  try {
    const books = await searchBooksService.searchBooks(searchTerm, startIndex);
    return res.status(httpStatus.OK).send(books);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getSubject(req: Request, res: Response) {
  const { subject, startIndex } = req.query as {
    subject: SubjectParams;
    startIndex: string;
  };
  if (!subject) return res.sendStatus(httpStatus.BAD_REQUEST);
  try {
    const books = await searchBooksService.searchBySubject(subject, startIndex);
    return res.status(httpStatus.OK).send(books);
  } catch (error) {
    if (error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getSearchedBook(req: Request, res: Response) {
  const { bookId } = req.params as { bookId: string };
  if (!bookId) return res.sendStatus(httpStatus.BAD_REQUEST);
  try {
    const book = await searchBooksService.searchByBookId(bookId);

    return res.status(httpStatus.OK).send(book);
  } catch (error) {
    if (error.name === "FailedToGetBookFromApi") {
      return res.status(httpStatus.SERVICE_UNAVAILABLE).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
