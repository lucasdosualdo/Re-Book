import {
  Container,
  Book,
  Cover,
  Info,
  InfoWrapper,
  ReviewContainer,
  Text,
} from "./style";
import rebook from "../../assets/images/rebook-blue.svg";
import BookStatus from "../../components/BookStatus";
import { IoChevronUp, IoChevronDown } from "react-icons/io5";
import { useState } from "react";

export default function Profile() {
  return (
    <>
      <Container>
        <h1>Meus livros</h1>
        <Book>
          <InfoWrapper>
            <Cover>
              <img src={rebook} alt="cover" />
            </Cover>
            <Info>
              <h3>Título do livro</h3>
              <p>description</p>
              <h6>
                Autor: <span>Nome do autor</span>
              </h6>
              <h6>
                Número de páginas: <span>222</span>
              </h6>
              <h6>
                Tradução: <span>pt-BR</span>
              </h6>
              <BookStatus />
            </Info>
          </InfoWrapper>

          <Review />
        </Book>
      </Container>
    </>
  );
}

function Review() {
  const [clicked, setClicked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [review, setReview] = useState(null);
  const [prevReview, setPrevReview] = useState("");

  function handleEdit() {
    setEditing(true);
  }

  function handleCancel() {
    setEditing(false);
    setPrevReview(review);
    if (!review) {
      setClicked(!clicked);
    }
  }

  function handleShowContent() {
    if (!review) {
      setEditing(true);
    }
    setClicked(!clicked);
  }

  function handleSave() {
    setEditing(false);
    setReview(prevReview);
    if (!prevReview) {
      setClicked(!clicked);
    }
  }
  return (
    <ReviewContainer>
      <h1>
        Review
        {!clicked && <IoChevronUp onClick={handleShowContent} />}
        {clicked && <IoChevronDown onClick={handleShowContent} />}
      </h1>

      {clicked && (
        <>
          {editing && (
            <Text>
              <textarea
                value={prevReview}
                onChange={(e) => setPrevReview(e.target.value)}
              ></textarea>
              <button onClick={handleSave}>salvar</button>
              <button onClick={handleCancel}>cancelar</button>
            </Text>
          )}
          {!editing && (
            <Text>
              <div>
                <p>{review}</p>
              </div>
              <button onClick={handleEdit}>editar</button>
            </Text>
          )}
        </>
      )}
    </ReviewContainer>
  );
}
