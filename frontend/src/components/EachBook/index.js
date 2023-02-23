import { BookBox } from "./style";
import { useNavigate } from "react-router-dom";

export default function EachBook({ key, book }) {
  const navigate = useNavigate();
  book.cover = changeCover(book.cover);
  const joinedAuthors = joinAuthors(book.authors);
  return (
    <>
      <BookBox
        onClick={() => navigate("/book", { state: { ...book, joinedAuthors } })}
      >
        <div>
          <img src={book.cover} alt="narutin" />
        </div>
        <h3>{book.title}</h3>
        <h5>{joinedAuthors}</h5>
      </BookBox>
    </>
  );
}

function changeCover(cover) {
  if (cover?.thumbnail) {
    cover = cover?.thumbnail;
  } else if (!cover) {
    cover =
      "https://books.google.com/books/content?id=EnGiDwAAQBAJ&printsec=frontcover&img=1&zoom=0&edge=curl&source=gbs_api";
  }
  return cover;
}

function joinAuthors(authors) {
  if (authors.length > 1) {
    return authors.join(", ");
  }
  return authors[0];
}
