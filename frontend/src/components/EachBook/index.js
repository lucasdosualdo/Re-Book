import { BookBox } from "./style";
import { useNavigate } from "react-router-dom";
import notAvailable from "../../assets/images/cover-not-available.svg";

export default function EachBook({ key, book }) {
  const navigate = useNavigate();
  book.cover = changeCover(book.cover);
  const joinedAuthors = joinAuthors(book?.authors);
  const bookId = book.id;
  return (
    <>
      <BookBox
        onClick={() =>
          navigate(`/book/${bookId}`, { state: { ...book, joinedAuthors } })
        }
      >
        <div>
          <img src={book.cover} alt="narutin" />
        </div>
        <h3>{book.title}</h3>
        {joinedAuthors && <h5>{joinedAuthors}</h5>}
      </BookBox>
    </>
  );
}

function changeCover(cover) {
  if (cover?.thumbnail) {
    cover = cover?.thumbnail;
  } else if (!cover) {
    cover = notAvailable;
  }
  return cover;
}

function joinAuthors(authors) {
  if (!authors) return null;
  if (authors.length > 1) {
    return authors.join(", ");
  }
  return authors[0];
}
