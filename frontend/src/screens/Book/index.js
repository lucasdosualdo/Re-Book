import {
  BookContainer,
  Cover,
  Descriptions,
  BackIcon,
  CommentsContainer,
  Divider,
  CommentBox,
} from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookStatus from "../../components/BookStatus";
import rebook from "../../assets/images/rebook-grey.svg";

export default function Book() {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state;
  const { bookId } = useParams();

  return (
    <>
      <BookContainer>
        <BackIcon onClick={() => navigate(-1)}></BackIcon>
        <Cover>
          <img src={book.cover} alt="narutin" />
        </Cover>
        <Descriptions>
          <h1>{book.title}</h1>
          <p>{book.description}</p>
          {book.joinedAuthors && (
            <h3>
              Autor: <span>{book.joinedAuthors}</span>
            </h3>
          )}
          {book.pages && (
            <h3>
              Número de páginas: <span>{book.pages}</span>
            </h3>
          )}
          {book.language && (
            <h3>
              Tradução: <span>{book.language}</span>
            </h3>
          )}

          <BookStatus />
        </Descriptions>
      </BookContainer>
      <CommentsContainer>
        <h1>Comentários</h1>
        <p>O que achou do livro? Queremos ouvir sua opinião!</p>
        <h6>Ordenar por:</h6>
        <Divider></Divider>
        <CommentBox>
          <img src={rebook} alt="profile" />

          <textarea></textarea>
          <button>Enviar</button>
        </CommentBox>
      </CommentsContainer>
    </>
  );
}
