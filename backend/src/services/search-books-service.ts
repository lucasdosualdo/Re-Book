import { getBooksByTitle, getCover, getBooksBySubject } from "../api/get-books";
import { badRequestError } from "../errors/bad-request-error";
import { notFoundError } from "../errors/not-found-error";
import { SubjectParams } from "../protocols";

const covers = {};

export async function searchBooks(searchTerm: string) {
  const prunedTerm = trimSearchTerm(searchTerm);

  try {
    const response = await getBooksByTitle(prunedTerm);

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

export async function searchBySubject(subject: SubjectParams) {
  try {
    const response = await getBooksBySubject(subject);

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
  const booksWithDescription = books.items.filter(
    (book) => book.volumeInfo.description
  );

  const booksBody = booksWithDescription.map((book) => {
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
    };
  });
  const newBooks: Promise<FormatBookParams>[] = await Promise.all(
    booksBody.map(replaceCover)
  );

  return newBooks;
}

async function replaceCover(
  book
): Promise<string | Record<string, string> | null> {
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
  return book;
}

type FormatBookParams = {
  id: string;
  title: string;
  authors: string[];
  description: string;
  cover: string | Record<string, string> | null;
  isbn: string[];
  pages: number | null;
  language: string | null;
};

function trimSearchTerm(searchTerm: string) {
  const prunedTerm = searchTerm.trim().replace(/ /g, "+");
  if (prunedTerm.replace(/[^\w\s]/gi, "").length === 0) {
    throw notFoundError();
  }
  return prunedTerm;
}

const searchBooksService = { searchBooks, searchBySubject };

export default searchBooksService;
