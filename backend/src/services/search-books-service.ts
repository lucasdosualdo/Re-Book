import { getBooks, getCover } from "../api/get-books";
import { badRequestError } from "../errors/bad-request-error";
import { notFoundError } from "../errors/not-found-error";

export async function searchBooks(searchTerm: string) {
  const prunedTerm = trimSearchTerm(searchTerm);

  try {
    const response = await getBooks(searchTerm);

    if (!response.data.totalItems) throw notFoundError();
    const books = response.data;
    const formatBooks = await formatBody(books);

    return formatBooks;
  } catch (error) {
    throw badRequestError();
  }

  try {
    const cover = await getCover();
  } catch (error) {
    throw notFoundError();
  }
}

function formatBody(books) {
  const booksBody = books.items.map((book) => {
    if (book.volumeInfo.description) {
      return {
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        description: book.volumeInfo.description
          ? book.volumeInfo.description
          : null,
        cover: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : null,
        isbn: book.volumeInfo.industryIdentifiers.map(
          (value) => value.identifier
        ),
      };
    }
  });

  return booksBody;
}

function trimSearchTerm(searchTerm: string) {
  const prunedTerm = searchTerm.trim().replace(/ /g, "+");
  if (prunedTerm.replace(/[^\w\s]/gi, "").length === 0) {
    throw notFoundError();
  }
  return prunedTerm;
}

const searchBooksService = { searchBooks };

export default searchBooksService;
