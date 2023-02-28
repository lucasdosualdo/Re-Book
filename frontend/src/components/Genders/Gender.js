import { GenderBox } from "./style";
import { getBooksBySubject } from "../../services/searchBooksApi";
import { useBooks } from "../../contexts/BooksContext";
import { useSubject } from "../../hooks/useSubject";
import { useNavigate } from "react-router-dom";
import { useIndexes } from "../../contexts/IndexesContext";

export default function Gender({ gender }) {
  const navigate = useNavigate();
  const title = gender[0];
  const color = gender[1];
  const image = gender[2];
  const { setBooks } = useBooks();
  const { setIndexes } = useIndexes();
  const subject = useSubject(title);
  const booksPerPage = 40;

  async function handleSubject(event) {
    event.preventDefault();
    try {
      const data = await getBooksBySubject(subject);
      setBooks(data);
      const pagesQuantity = Math.ceil(data.totalItems / booksPerPage);
      setIndexes(
        Array.from({ length: pagesQuantity }, (_, index) => index + 1)
      );
      navigate("/search");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <GenderBox color={color} onClick={handleSubject}>
      <h3>{title}</h3>
      <img src={image} alt="" />
    </GenderBox>
  );
}
