import { BookBox } from "./style";

export default function EachBook({ key, book }) {
  return (
    <>
      <BookBox>
        <div>
          {book.cover?.thumbnail && (
            <img src={book.cover?.thumbnail} alt="narutin" />
          )}
          {book.cover && typeof book.cover === "string" && (
            <img src={book.cover} alt="narutin" />
          )}

          {!book.cover && (
            <img
              src="https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api"
              alt="narutin"
            />
          )}
        </div>

        <h3>{book.title}</h3>
        <h5>
          {book.authors.length > 1 ? book.authors.join(", ") : book.authors[0]}
        </h5>
      </BookBox>
    </>
  );
}
