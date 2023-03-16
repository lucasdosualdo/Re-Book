import { getBooksByTitle, getCover, getBooksBySubject } from "../api/get-books";
import { badRequestError } from "../errors/bad-request-error";
import { notFoundError } from "../errors/not-found-error";
import { SubjectParams } from "../protocols";
import { getBookById } from "../api/get-books";
import { failedToGetBookFromApi } from "../errors/failed-to-get-book-from-api-error";

export async function searchBooks(searchTerm: string, startIndex: string) {
  const prunedTerm = trimSearchTerm(searchTerm);

  try {
    const response = await getBooksByTitle(prunedTerm, startIndex);

    if (!response.data.totalItems) throw notFoundError();

    const totalItems: number = response.data.totalItems;

    const formatedBooks = await formatBody(response.data);
    const books = {
      totalItems,
      items: formatedBooks,
    };
    return books;
  } catch (error) {
    throw badRequestError();
  }
}

export async function searchByBookId(bookId: string) {
  try {
    const response = await getBookById(bookId);
    const bookParams: FormatBookParams = {
      id: response.data.id,
      title: response.data.volumeInfo.title,
      authors: response.data.volumeInfo.authors
        ? response.data.volumeInfo.authors
        : null,

      description: response.data.volumeInfo.description
        ? response.data.volumeInfo.description
        : null,
      cover: response.data.volumeInfo.imageLinks
        ? response.data.volumeInfo.imageLinks
        : null,
      isbn: response.data.volumeInfo.industryIdentifiers
        ? response.data.volumeInfo.industryIdentifiers.map(
            (value) => value.identifier
          )
        : null,
      pages: response.data.volumeInfo.pageCount
        ? response.data.volumeInfo.pageCount
        : null,
      language: response.data.volumeInfo.language
        ? response.data.volumeInfo.language
        : null,
      publishedDate: response.data.volumeInfo.publishedDate
        ? response.data.volumeInfo.publishedDate
        : null,
      category: response.data.volumeInfo.categories
        ? response.data.volumeInfo.categories
        : null,
    };
    const newBook = replaceCover(bookParams);
    return newBook;
  } catch (error) {
    throw failedToGetBookFromApi(error.message);
  }
}

export async function searchBySubject(
  subject: SubjectParams,
  startIndex: string
) {
  try {
    const response = await getBooksBySubject(subject, startIndex);

    if (!response.data.totalItems) throw notFoundError();
    const totalItems: number = response.data.totalItems;
    const formatedBooks = await formatBody(response.data);
    const books = {
      totalItems,
      items: formatedBooks,
    };
    return books;
  } catch (error) {
    throw badRequestError();
  }
}

async function formatBody(books) {
  const booksBody = books.items?.map((book) => {
    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors ? book.volumeInfo.authors : null,

      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : null,
      cover: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : null,
      isbn: book.volumeInfo.industryIdentifiers
        ? book.volumeInfo.industryIdentifiers.map((value) => value.identifier)
        : null,
      pages: book.volumeInfo.pageCount ? book.volumeInfo.pageCount : null,
      language: book.volumeInfo.language ? book.volumeInfo.language : null,
      publishedDate: book.volumeInfo.publishedDate
        ? book.volumeInfo.publishedDate
        : null,
      category: book.volumeInfo.categories ? book.volumeInfo.categories : null,
    };
  });
  if (!booksBody) throw badRequestError();

  return booksBody;
}

async function replaceCover(book): Promise<FormatBookParams> {
  const isbn = book.isbn ? book.isbn[0] : null;
  let cover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  try {
    await getCover(cover);

    book.cover = cover;
  } catch (error) {
    const isbn = book.isbn ? book.isbn[1] : null;
    let cover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
    try {
      await getCover(cover);
      book.cover = cover;
    } catch (error) {}
  }
  return book as FormatBookParams;
}

type FormatBookParams = {
  id: string;
  title: string;
  authors: string[];
  description: string | null;
  cover: string | Record<string, string> | null;
  isbn: string[] | null;
  pages: number | null;
  language: string | null;
  publishedDate: string | null;
  category: string[] | null;
};

function trimSearchTerm(searchTerm: string) {
  const prunedTerm = searchTerm.trim().replace(/ /g, "+");
  if (prunedTerm.replace(/[^\w\s]/gi, "").length === 0) {
    throw notFoundError();
  }
  return prunedTerm;
}

const searchBooksService = { searchBooks, searchBySubject, searchByBookId };

export default searchBooksService;
