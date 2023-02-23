import { Container, Cover, Descriptions } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import BookStatus from "../../components/BookStatus";
import styled from "styled-components";

export default function Book() {
  const navigate = useNavigate();
  const location = useLocation();
  const book = location.state;
  const { bookId } = useParams();

  return (
    <>
      <Container>
        <BackIcon onClick={() => navigate(-1)}></BackIcon>
        <Cover>
          <img src={book?.cover} alt="narutin" />
        </Cover>
        <Descriptions>
          <h1>{book?.title}</h1>
          <p>{book?.description}</p>
          <h3>
            Autor: <span>{book?.joinedAuthors}</span>
          </h3>
          <h3>
            Gênero: <span>Romance</span>
          </h3>
          <BookStatus />
        </Descriptions>
      </Container>
    </>
  );
}

const BackIcon = styled(IoArrowBackCircleOutline)`
  cursor: pointer;
  color: rgb(204, 204, 204);
  font-size: 60px;
  position: absolute;
  top: 25px;
  left: 25px;
  :hover {
    color: #ff006e;
  }
  @media (max-width: 650px) {
    left: 10vw;
  }
`;
