import { getBooks, getCover } from "../api/get-books";
import { badRequestError } from "../errors/bad-request-error";
import { notFoundError } from "../errors/not-found-error";

export async function searchBooks(searchTerm: string) {
  const prunedTerm = trimSearchTerm(searchTerm);

  try {
    const response = await getBooks(prunedTerm);

    //if (!response.data.totalItems) throw notFoundError();
    //const books = response.data;
    return response.data
    const formatBooks = await formatBody(response.data);
    
    return formatBooks;
  } catch (error) {
    console.log(error.message);
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
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description
        ? book.volumeInfo.description
        : null,
      cover: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks : null,
      isbn: book.volumeInfo.industryIdentifiers.map(
        (value) => value.identifier
      ),
    };
  });

  const newBooks = await Promise.all(booksBody.map(replaceCover));

  return newBooks;
}

async function replaceCover(book) {
  const isbn = book.isbn[0];
  let cover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
  try {
    await getCover(cover);

    book.cover = cover;
  } catch (error) {
    const isbn = book.isbn[1];
    let cover = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg?default=false`;
    try {
      await getCover(cover);
      book.cover = cover;
    } catch (error) {}
  }
  return book;
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
